import fs from 'fs';
import { resolveConfig } from 'vitepress';

const config = await resolveConfig(process.cwd());
console.log('Sample 20 pages from config.pages:');
const nonDocs = config.pages.filter(p => !p.startsWith('airport') && !p.startsWith('brands') && !p.startsWith('clash') && !p.startsWith('compare') && !p.startsWith('resources') && !p.startsWith('vpn') && p !== 'index.md' && p !== '404.md');
console.log('Non-standard pages count:', nonDocs.length);
console.log(nonDocs.slice(0, 30));
