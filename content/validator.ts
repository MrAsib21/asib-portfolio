import { siteConfig } from "./site";
import { projects } from "./projects";
import { activities } from "./activities";
import { services } from "./services";

export interface PlaceholderFinding {
  source: string;
  field: string;
  placeholderText: string;
}

export function scanForPlaceholders(): PlaceholderFinding[] {
  const findings: PlaceholderFinding[] = [];
  const placeholderRegex = /\[[A-Z0-9_\-\s:/@.+]+\]/g;

  function checkString(val: string, source: string, field: string) {
    if (typeof val !== "string") return;
    const matches = val.match(placeholderRegex);
    if (matches) {
      matches.forEach((m) => {
        findings.push({ source, field, placeholderText: m });
      });
    }
  }

  // Scan site config
  checkString(siteConfig.email, "siteConfig", "email");
  checkString(siteConfig.bookingUrl, "siteConfig", "bookingUrl");
  checkString(siteConfig.github, "siteConfig", "github");
  checkString(siteConfig.linkedin, "siteConfig", "linkedin");
  checkString(siteConfig.workStatus, "siteConfig", "workStatus");

  // Scan projects
  projects.forEach((p, idx) => {
    checkString(p.title, `projects[${idx}] (${p.slug})`, "title");
    checkString(p.clientOrOrg, `projects[${idx}] (${p.slug})`, "clientOrOrg");
    checkString(p.duration, `projects[${idx}] (${p.slug})`, "duration");
    checkString(p.team, `projects[${idx}] (${p.slug})`, "team");
    if (p.links.live) checkString(p.links.live, `projects[${idx}] (${p.slug})`, "links.live");
    if (p.links.github) checkString(p.links.github, `projects[${idx}] (${p.slug})`, "links.github");
    p.metrics.forEach((m, mIdx) => {
      checkString(m.value, `projects[${idx}].metrics[${mIdx}]`, "value");
    });
  });

  // Scan activities
  activities.forEach((a, idx) => {
    checkString(a.title, `activities[${idx}] (${a.id})`, "title");
    checkString(a.organization, `activities[${idx}] (${a.id})`, "organization");
    checkString(a.role, `activities[${idx}] (${a.id})`, "role");
    a.highlights.forEach((h, hIdx) => {
      checkString(h, `activities[${idx}].highlights[${hIdx}]`, "highlight");
    });
  });

  return findings;
}

export function validateContent(): void {
  const findings = scanForPlaceholders();
  if (findings.length > 0) {
    console.log(`\n🔍 Found ${findings.length} placeholder token(s) across content files:`);
    findings.forEach((f) => {
      console.log(`  - [${f.source}] ${f.field}: ${f.placeholderText}`);
    });

    if (process.env.STRICT_CONTENT === "true") {
      throw new Error(
        `🚨 STRICT_CONTENT is enabled and ${findings.length} placeholder token(s) remain. Replace them before deployment.`
      );
    }
  } else {
    console.log("✅ All content fields have been verified! Zero placeholders detected.");
  }
}

