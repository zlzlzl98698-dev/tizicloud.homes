const fs = require("fs");
const content = fs.readFileSync("C:/Users/Pro User/Desktop/机场品牌信息/42家机场品牌清单.txt", "utf-8");
const lines = content.split(/\r?\n/);

console.log("Lines 1585-1615:");
console.log(lines.slice(1585, 1615).join("\n"));

console.log("\nLines 1200-1225:");
console.log(lines.slice(1200, 1225).join("\n"));
