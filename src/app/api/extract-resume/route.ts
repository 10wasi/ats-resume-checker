import { NextRequest, NextResponse } from "next/server";
import mammoth from "mammoth";
import { sanitizeFileName } from "@/lib/sanitize";
import { applyAnonCookie, resolveAnonId } from "@/lib/monetization/resolve-anon";
import { incrementExtractSuccess } from "@/lib/monetization/usage-gate";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BYTES = 10 * 1024 * 1024;

export async function POST(req: NextRequest) {
  const { anonId, isNew } = resolveAnonId(req);

  const respond = (body: object, status = 200) => {
    const res = NextResponse.json(body, { status });
    applyAnonCookie(res, anonId, isNew);
    return res;
  };

  try {
    const form = await req.formData();
    const file = form.get("file");

    if (!file || !(file instanceof File)) {
      return respond(
        { error: "Choose a PDF or Word file to upload." },
        400
      );
    }

    if (file.size > MAX_BYTES) {
      return respond(
        { error: "File is too large. Maximum size is 10 MB." },
        400
      );
    }

    const name = file.name.toLowerCase();
    const buffer = Buffer.from(await file.arrayBuffer());
    let text = "";

    if (name.endsWith(".pdf")) {
      const pdfParse = (await import("pdf-parse")).default;
      const data = await pdfParse(buffer);
      text = data.text ?? "";
    } else if (name.endsWith(".docx")) {
      const result = await mammoth.extractRawText({ buffer });
      text = result.value;
    } else {
      return respond(
        {
          error:
            "This format is not supported. Please use a PDF or Word (.docx) file.",
        },
        400
      );
    }

    incrementExtractSuccess(anonId, undefined);
    return respond({
      text: text.replace(/\u0000/g, "").trim(),
      fileName: sanitizeFileName(file.name),
    });
  } catch (err) {
    console.error("extract-resume:", err);
    return respond(
      { error: "We could not read this file. Try a different export." },
      500
    );
  }
}
