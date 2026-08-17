const fs = require('fs');
const path = require('path');

function walkSync(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      filelist.push(dirFile);
    }
  });
  return filelist;
}

const files = walkSync('src').filter(f => f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.css'));

const replacements = [
  { regex: /\b(text|bg|border|ring|shadow|from|via|to|decoration)-orange-400\b/g, replace: "$1-primary-400" },
  { regex: /\b(text|bg|border|ring|shadow|from|via|to|decoration)-orange-500\b/g, replace: "$1-primary-500" },
  { regex: /\b(text|bg|border|ring|shadow|from|via|to|decoration)-orange-600\b/g, replace: "$1-primary-600" },
  { regex: /\b(text|bg|border|ring|shadow|from|via|to|decoration)-orange-300\b/g, replace: "$1-primary-300" },
  
  { regex: /\b(text|bg|border|ring|shadow|from|via|to|decoration)-emerald-400\b/g, replace: "$1-secondary-400" },
  { regex: /\b(text|bg|border|ring|shadow|from|via|to|decoration)-emerald-500\b/g, replace: "$1-secondary-500" },
  { regex: /\b(text|bg|border|ring|shadow|from|via|to|decoration)-emerald-600\b/g, replace: "$1-secondary-600" },
  
  { regex: /\b(text|bg|border|ring|shadow|from|via|to|decoration)-blue-500\b/g, replace: "$1-accent-500" },
  { regex: /\b(text|bg|border|ring|shadow|from|via|to|decoration)-blue-400\b/g, replace: "$1-accent-400" },
  { regex: /\b(text|bg|border|ring|shadow|from|via|to|decoration)-blue-600\b/g, replace: "$1-accent-600" },
];

let modifiedCount = 0;
files.forEach(file => {
  let original = fs.readFileSync(file, 'utf8');
  let updated = original;

  replacements.forEach(({ regex, replace }) => {
    updated = updated.replace(regex, replace);
  });

  // Also replace any specific hex codes if they are hardcoded
  updated = updated.replace(/#FF6B00/gi, '#7000FF');
  updated = updated.replace(/#FF8533/gi, '#9b4dff');

  if (original !== updated) {
    fs.writeFileSync(file, updated, 'utf8');
    modifiedCount++;
  }
});

console.log(`Modified ${modifiedCount} files for Stitch theme.`);
