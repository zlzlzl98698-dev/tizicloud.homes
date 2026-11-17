const fs = require("fs");

const txtPath = "C:/Users/Pro User/Desktop/机场品牌信息/42家机场品牌清单.txt";
const content = fs.readFileSync(txtPath, "utf-8");
const lines = content.split(/\r?\n/);

console.log("Total lines in file:", lines.length);

lines.forEach((line, idx) => {
  if (line.includes("##") || line.match(/^[0-9]+[\.、]/)) {
    if (line.length < 80) {
      console.log(`Line ${idx + 1}: ${line}`);
    }
  }
});
