const fs = require("fs");
const path = require("path");

// Read raw sources
const raw42 = fs.readFileSync("C:/Users/Pro User/Desktop/机场品牌信息/42家机场品牌清单.txt", "utf-8");
const rawGsy = fs.readFileSync("C:/Users/Pro User/Desktop/机场品牌信息/光速云品牌信息.txt", "utf-8");
const speedtestManifest = JSON.parse(fs.readFileSync("docs/public/images/speedtest/speedtest-manifest.json", "utf-8"));

// Read title pools
const pool169 = fs.readFileSync("C:/Users/Pro User/Desktop/169篇机场文章标题.txt", "utf-8").split(/\r?\n/).filter(l => l.trim().length > 0);
const poolVpn = fs.readFileSync("C:/Users/Pro User/Desktop/VPN加速器文章标题.txt", "utf-8").split(/\r?\n/).filter(l => l.trim().length > 0);
const poolJc = fs.readFileSync("C:/Users/Pro User/Desktop/机场推荐文章标题.txt", "utf-8").split(/\r?\n/).filter(l => l.trim().length > 0);

// Read keyword pools
const kwPriority = fs.readFileSync("C:/Users/Pro User/Desktop/关键词总库/机场推荐关键字优先级词库.txt", "utf-8").split(/\r?\n/).filter(l => l.trim().length > 0);
const kwLongtail = fs.readFileSync("C:/Users/Pro User/Desktop/关键词总库/机场推荐长尾问题库.txt", "utf-8").split(/\r?\n/).filter(l => l.trim().length > 0);
const kwVpn = fs.readFileSync("C:/Users/Pro User/Desktop/关键词总库/VPN关键词库.txt", "utf-8").split(/\r?\n/).filter(l => l.trim().length > 0);
const kwTizi = fs.readFileSync("C:/Users/Pro User/Desktop/关键词总库/梯子工具关键词库.txt", "utf-8").split(/\r?\n/).filter(l => l.trim().length > 0);
const kwFree = fs.readFileSync("C:/Users/Pro User/Desktop/关键词总库/机场推荐免费词库.txt", "utf-8").split(/\r?\n/).filter(l => l.trim().length > 0);

console.log("Sources loaded successfully.");
console.log(`Titles: 169=${pool169.length}, VPN=${poolVpn.length}, JC=${poolJc.length}`);
console.log(`Keywords: Priority=${kwPriority.length}, Longtail=${kwLongtail.length}, Free=${kwFree.length}`);
