const fs = require("fs");
const content = fs.readFileSync("C:/Users/Pro User/Desktop/网站总管理/机场一级导航.txt", "utf-8");
console.log("Length of 机场一级导航.txt:", content.length);
console.log("First 1500 chars:");
console.log(content.slice(0, 1500));
