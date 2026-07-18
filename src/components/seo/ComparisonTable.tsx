type Row = {
  feature: string;
  resumeiq: string;
  typical: string;
};

type Props = {
  heading: string;
  caption?: string;
  rows: Row[];
};

/** Accessible comparison table for snippet and AI-search eligibility. */
export function ComparisonTable({ heading, caption, rows }: Props) {
  return (
    <figure className="not-prose my-10 overflow-x-auto">
      <figcaption className="mb-3 font-display text-lg font-bold text-slate-900">
        {heading}
      </figcaption>
      {caption ? <p className="mb-4 text-sm text-slate-600">{caption}</p> : null}
      <table className="w-full min-w-[480px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th scope="col" className="px-4 py-3 font-semibold text-slate-900">
              Factor
            </th>
            <th scope="col" className="px-4 py-3 font-semibold text-emerald-800">
              ResumeIQ approach
            </th>
            <th scope="col" className="px-4 py-3 font-semibold text-slate-700">
              Common mistake
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.feature} className="border-b border-slate-100">
              <th scope="row" className="px-4 py-3 font-medium text-slate-900">
                {row.feature}
              </th>
              <td className="px-4 py-3 text-slate-700">{row.resumeiq}</td>
              <td className="px-4 py-3 text-slate-600">{row.typical}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
