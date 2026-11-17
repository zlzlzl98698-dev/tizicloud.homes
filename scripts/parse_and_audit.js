const fs = require("fs");
const path = require("path");

const raw42 = fs.readFileSync("C:/Users/Pro User/Desktop/机场品牌信息/42家机场品牌清单.txt", "utf-8");
const rawGsy = fs.readFileSync("C:/Users/Pro User/Desktop/机场品牌信息/光速云品牌信息.txt", "utf-8");
const manifest = JSON.parse(fs.readFileSync("docs/public/images/speedtest/speedtest-manifest.json", "utf-8"));

// 1. Parse brands from 42家机场品牌清单.txt
// Let's inspect the sections in 42
const lines = raw42.split(/\r?\n/);

console.log("Parsing all brands from list...");
