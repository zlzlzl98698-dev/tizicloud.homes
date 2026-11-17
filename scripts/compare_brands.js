const fs = require("fs");
const content = fs.readFileSync("C:/Users/Pro User/Desktop/机场品牌信息/42家机场品牌清单.txt", "utf-8");

function getSection(startStr, endStr) {
  const s = content.indexOf(startStr);
  if (s === -1) return "NOT FOUND";
  const e = endStr ? content.indexOf(endStr, s + startStr.length) : content.length;
  return content.slice(s, e > 0 ? e : undefined);
}

console.log("=== FIREFLY (#8) ===");
console.log(getSection("## 8. Firefly", "## 10. 宇宙云"));

console.log("=== 萤火虫 ===");
console.log(getSection("萤火虫\n基础信息", "sslar"));

console.log("=== 飞猫云 (#3) ===");
console.log(getSection("## 3. 飞猫云", "## 4. 微风网络"));

console.log("=== FATCAT ===");
console.log(getSection("FATCAT\n基础信息", "TNTCloud"));
