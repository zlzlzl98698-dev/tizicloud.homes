const fs = require("fs");
const path = require("path");

const txtPath = "C:/Users/Pro User/Desktop/机场品牌信息/42家机场品牌清单.txt";
const raw = fs.readFileSync(txtPath, "utf-8");

// Parse Part 1 (brands 1-28)
// and Part 2 (14 historical brands)
console.log("Analyzing full 42 brands data file...");

// Let's inspect the sections
const part1End = raw.indexOf("## 完整数据表（可直接复制）");
const part1Text = raw.slice(0, part1End);
const tableEnd = raw.indexOf("这14家机场 位置都往后面排");
const tableText = raw.slice(part1End, tableEnd);
const part2Text = raw.slice(tableEnd);

console.log("Part 1 length:", part1Text.length);
console.log("Table length:", tableText.length);
console.log("Part 2 length:", part2Text.length);
