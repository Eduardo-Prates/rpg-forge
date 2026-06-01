const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, '..', 'src', 'routes', 'layout.css');
const css = fs.readFileSync(file, 'utf8');

function parseVars(cssText) {
  const re = /--([a-z0-9-]+)\s*:\s*([^;\n]+)/g;
  const vars = {};
  let m;
  while ((m = re.exec(cssText))) {
    vars[m[1]] = m[2].trim();
  }
  return vars;
}

function resolveVar(value, vars, depth = 0) {
  if (!value) return null;
  if (depth > 10) return null;
  const varRef = value.match(/var\(--([a-z0-9-]+)\)/);
  if (varRef) {
    const ref = varRef[1];
    return resolveVar(vars[ref], vars, depth + 1);
  }
  // strip possible comments or color-mix wrappers, try to extract hex or rgb
  const hexMatch = value.match(/#([0-9A-Fa-f]{3,6})/);
  if (hexMatch) return '#' + hexMatch[1];
  const rgbMatch = value.match(/rgba?\(([^\)]+)\)/);
  if (rgbMatch) return rgbMatch[0];
  return null;
}

function hexToRgb(hex) {
  if (hex.startsWith('#')) {
    hex = hex.slice(1);
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    const num = parseInt(hex, 16);
    return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
  }
  const m = hex.match(/([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)/);
  if (m) return [Number(m[1]), Number(m[2]), Number(m[3])];
  return null;
}

function linearize(c) {
  c = c / 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function luminance(rgb) {
  const [r, g, b] = rgb.map(linearize);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(hex1, hex2) {
  const a = hexToRgb(hex1);
  const b = hexToRgb(hex2);
  if (!a || !b) return null;
  const L1 = luminance(a);
  const L2 = luminance(b);
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}

const vars = parseVars(css);

const checks = [
  { a: 'bg', b: 'text', purpose: 'Body text on background', threshold: 4.5 },
  { a: 'card-bg', b: 'text', purpose: 'Card text on card background', threshold: 4.5 },
  { a: 'bg', b: 'accent', purpose: 'Accent on background (buttons, links)', threshold: 4.5 },
  { a: 'card-bg', b: 'accent', purpose: 'Accent on card background', threshold: 4.5 },
  { a: 'bg', b: 'muted', purpose: 'Muted text on background', threshold: 4.5 },
  { a: 'bg', b: 'ci-blue', purpose: 'CI blue on background', threshold: 4.5 },
  { a: 'bg', b: 'ci-orange', purpose: 'CI orange on background', threshold: 4.5 },
];

console.log('Contrast report for CSS variables in', file);
console.log('Found variables:', Object.keys(vars).join(', '));
console.log('-----');

let allPass = true;
for (const c of checks) {
  const rawA = vars[c.a] || vars[c.a.replace(/^--/, '')];
  const rawB = vars[c.b] || vars[c.b.replace(/^--/, '')];
  const a = resolveVar(rawA, vars);
  const b = resolveVar(rawB, vars);
  if (!a || !b) {
    console.log(`SKIP: ${c.purpose} (missing var ${c.a} or ${c.b})`);
    allPass = false;
    continue;
  }
  const ratio = contrast(a, b);
  const ok = ratio >= c.threshold;
  console.log(`${ok ? 'PASS' : 'FAIL'}: ${c.purpose} — ${c.a} vs ${c.b} = ${ratio ? ratio.toFixed(2) : 'n/a'} (need ≥ ${c.threshold})`);
  if (!ok) allPass = false;
}

console.log('-----');
console.log(allPass ? 'All checks passed' : 'Some checks failed or were skipped');
process.exit(allPass ? 0 : 2);
