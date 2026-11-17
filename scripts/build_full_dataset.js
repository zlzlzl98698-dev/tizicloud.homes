const fs = require("fs");
const path = require("path");

console.log("Starting full dataset generator...");

// Ensure directories exist
fs.mkdirSync("data", { recursive: true });
fs.mkdirSync("docs", { recursive: true });
fs.mkdirSync("docs/.vitepress", { recursive: true });
fs.mkdirSync("docs/.vitepress/theme", { recursive: true });
fs.mkdirSync("docs/.vitepress/theme/components", { recursive: true });
fs.mkdirSync("planning", { recursive: true });

console.log("Directories created.");
