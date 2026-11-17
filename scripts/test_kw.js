const fs = require("fs");
const path = require("path");

const kwDir = "C:/Users/Pro User/Desktop/关键词总库";
const files = fs.readdirSync(kwDir);

files.forEach(f => {
  if (f.endsWith(".txt")) {
    const full = path.join(kwDir, f);
    const content = fs.readFileSync(full, "utf-8");
    const lines = content.split(/\r?\n/).filter(l => l.trim().length > 0);
    console.log(`${f}: ${lines.length} lines, ${content.length} chars`);
  }
});
