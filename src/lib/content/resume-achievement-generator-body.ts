export const RESUME_ACHIEVEMENT_GENERATOR_PATH = "/resume-achievement-generator" as const;

export const resumeAchievementGeneratorBody = `
Most resume bullets describe what you did. Achievement bullets prove what you *delivered*. Recruiters and ATS filters reward proof—and the gap between "Managed social media" and "Grew Instagram from 4K to 52K followers in 14 months" is the gap between a rejection and an interview.

The [Resume Achievement Generator](/resume-achievement-generator) turns duties into achievement statements. This guide shows the framework behind strong bullets so you can refine what it produces.

## The anatomy of a strong achievement bullet

Every high-performing bullet answers four questions:

\`\`\`
WHAT did you do? (action verb)
AT WHAT SCALE? (scope signal)
USING WHAT? (tool or method)
WITH WHAT RESULT? (metric)

Example:
"Led [WHAT] migration of 200-node Kubernetes cluster [SCALE]
 using Helm and Terraform [TOOL] — reduced deployment errors
 78% and cut release cycle from 2 weeks to 3 days [RESULT]"
\`\`\`

Not every bullet needs all four components. But the more you include honestly, the more value the bullet delivers to both parsers and humans.

## The XYZ formula (Google's career advice, applied)

Google's recruiting team popularized: *"Accomplished [X] as measured by [Y], by doing [Z]."*

Applied to resume bullets:
- X = your achievement
- Y = the metric that proves it
- Z = what you specifically did to make it happen

The generator uses a similar structure. Your job is to replace the templates with real numbers and the actual tool/method you used.

## Before vs after: 5 real rewrites

\`\`\`
BEFORE: Responsible for customer service and support tickets.
AFTER:  Resolved 120+ support tickets/week in Zendesk with a
        97% CSAT score; reduced average first-response to 2hrs.

BEFORE: Worked on financial reporting.
AFTER:  Automated month-end close reports in Excel + Power Query,
        cutting prep time from 3 days to 4 hours.

BEFORE: Managed social media accounts.
AFTER:  Grew LinkedIn page from 800 to 12,400 followers in 9
        months via a 3x/week content strategy; drove 40% of
        web traffic from organic social.

BEFORE: Helped with hiring process.
AFTER:  Screened 300+ applications and coordinated 60 interviews
        in Greenhouse; reduced time-to-offer from 6 weeks to 22 days.

BEFORE: Developed new features for web app.
AFTER:  Built cart abandonment email flow in React + Klaviyo;
        recovered $28K in lost revenue in first 90 days.
\`\`\`

Notice what every "after" has: an action verb, a scale signal, a specific tool, and a metric. The tool is the ATS keyword; the metric is what makes the recruiter pause.

## How to estimate a metric when you do not have exact numbers

"I don't have metrics" is the most common objection. You almost always have them:

| Situation | How to estimate |
|-----------|----------------|
| No tracked revenue impact | Estimate the process improvement ("saved ~3 hrs/week") |
| Team ownership unclear | State your direct scope ("my portion of a 12-person team") |
| No before/after comparison | Use absolutes ("managed X accounts," "onboarded Y users") |
| Sensitive company data | Use %s instead of absolutes ("improved X by ~30%") |

You do not need perfect precision. A reasonable approximation you can defend in an interview is enough.

## What the achievement generator cannot do

- It cannot know your actual metrics — you must fill them in
- It cannot tell whether a claim is accurate — accuracy is your responsibility  
- It does not replace your judgment on which bullets belong on a one-page resume
- It does not guarantee ATS keyword alignment without checking against a posting

Always run the [ATS Resume Checker](/resume-checker) after editing bullets to confirm keywords extracted correctly from your exported PDF.

## Related tools and guides

- [Resume Bullet Generator](/resume-bullet-generator) — broader bullet structures
- [Resume Summary Generator](/resume-summary-generator) — lead-line framing
- [ATS Keywords Finder](/ats-keywords-finder) — ensure bullets include posting terms
- [Resume Match Analyzer](/resume-job-description-match) — measure impact of bullet changes
- [Resume Examples](/resume-examples) — real achievement bullets by role
`;
