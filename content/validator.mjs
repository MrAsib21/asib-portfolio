import fs from "fs";
import path from "path";

const contentDir = "./content";
const files = ["site.ts", "projects.ts", "activities.ts", "services.ts"];
const placeholderRegex = /\[[A-Z0-9_\-\s:/@.+]+\]/g;

let totalPlaceholders = 0;
const findings = [];

for (const file of files) {
  const filePath = path.join(contentDir, file);
  if (!fs.existsSync(filePath)) continue;

  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  lines.forEach((line, lineIdx) => {
    const matches = line.match(placeholderRegex);
    if (matches) {
      matches.forEach((token) => {
        totalPlaceholders++;
        findings.push({
          file,
          line: lineIdx + 1,
          token,
          snippet: line.trim(),
        });
      });
    }
  });
}

console.log("\n========================================================");
console.log("       ASIB MAHMUD PORTFOLIO :: CONTENT VALIDATOR       ");
console.log("========================================================\n");

if (findings.length > 0) {
  console.log(`🔍 Detected ${findings.length} placeholder token(s) across content files:\n`);
  findings.forEach((f) => {
    console.log(`  • [${f.file}:${f.line}] ${f.token}`);
  });

  console.log("\n--------------------------------------------------------");
  console.log("To customize this portfolio with your real information:");
  console.log("1. Edit the files in the /content folder.");
  console.log("2. Replace each [TOKEN] with your real details.");
  console.log("3. Re-run 'npm run check-content' to verify.");
  console.log("--------------------------------------------------------\n");

  if (process.env.STRICT_CONTENT === "true") {
    console.error("🚨 STRICT_CONTENT is enabled and placeholders remain. Build halted.\n");
    process.exit(1);
  }
} else {
  console.log("✅ 100% Verified! Zero unreplaced placeholder tokens found.\n");
}

