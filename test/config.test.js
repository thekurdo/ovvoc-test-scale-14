const fs = require('fs');
const path = require('path');

let passed = 0;
let failed = 0;
function test(name, fn) { try { fn(); passed++; } catch (e) { console.error(`FAIL: ${name} - ${e.message}`); failed++; } }
function assert(condition, msg) { if (!condition) throw new Error(msg || 'Assertion failed'); }

const config = require(path.join(__dirname, '..', 'tailwind.config.js'));
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));

test('tailwindcss is 2.x', () => assert(pkg.devDependencies.tailwindcss.startsWith('2')));
test('has purge config', () => assert(config.purge && config.purge.content));
test('has deprecated colors', () => {
  const c = config.theme.extend.colors;
  assert(c.warmGray && c.trueGray && c.coolGray && c.blueGray);
});
test('has variants', () => assert(config.variants && config.variants.extend));
test('darkMode is class', () => assert(config.darkMode === 'class'));
test('8 component files', () => {
  const dir = path.join(__dirname, '..', 'src', 'components');
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
  assert(files.length === 8, `Expected 8, got ${files.length}`);
});
test('components use deprecated colors', () => {
  const dir = path.join(__dirname, '..', 'src', 'components');
  let found = 0;
  for (const f of fs.readdirSync(dir)) {
    const c = fs.readFileSync(path.join(dir, f), 'utf8');
    if (c.includes('warmGray') || c.includes('trueGray') || c.includes('coolGray') || c.includes('blueGray')) found++;
  }
  assert(found >= 6, `Expected >=6 with deprecated colors, got ${found}`);
});

console.log(`\n${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
