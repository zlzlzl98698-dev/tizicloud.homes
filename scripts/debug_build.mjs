import { build } from 'vitepress';

try {
  await build('docs');
  console.log('Build succeeded!');
} catch (e) {
  console.error('Build failed with error:', e);
}
