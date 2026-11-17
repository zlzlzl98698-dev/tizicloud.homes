const fs = require("fs");
const content = fs.readFileSync("C:/Users/Pro User/Desktop/机场品牌信息/42家机场品牌清单.txt", "utf-8");
const lines = content.split(/\r?\n/);

console.log("Analyzing lines 960 to end...");
for (let i = 960; i < lines.length; i++) {
  const line = lines[i].trim();
  // check for brand header patterns
  if (line.match(/^([0-9]+[\.、]|\#\#\s*[0-9]+[\.、]|[A-Za-z0-9\u4e00-\u9fa5]+$)/)) {
    // if next few lines have "基础信息" or "核心特色" or "套餐价格"
    const nextChunk = lines.slice(i, i + 8).join(" ");
    if (nextChunk.includes("基础信息") || nextChunk.includes("核心特色") || nextChunk.includes("套餐价格")) {
      console.log(`Line ${i + 1}: ${line}`);
    }
  }
}
