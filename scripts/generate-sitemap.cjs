const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://www.kagurabachimanga.online';

// Load actual chapters from the scraped JSON
const mangaData = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../public/scraped_w5baek-kagurabachi.json'), 'utf-8')
);

const SERIES_START = new Date('2023-09-19T00:00:00Z').getTime();
const NOW = new Date().getTime();
const TODAY = new Date().toISOString().split('T')[0];

const sortedChapters = [...mangaData.chapters].sort((a, b) => a.chapter_number - b.chapter_number);
const totalChapters = sortedChapters.length;

// Build chapter list with release dates interpolated between SERIES_START and NOW
const chapters = sortedChapters.map((ch, index) => {
  const fraction = totalChapters > 1 ? index / (totalChapters - 1) : 1;
  const releaseTime = SERIES_START + (NOW - SERIES_START) * fraction;
  return {
    number: ch.chapter_number,
    releaseDate: new Date(releaseTime).toISOString().split('T')[0],
  };
});

const latestChapterNum = chapters[chapters.length - 1].number;
const recentThreshold = latestChapterNum - 10;

function chapterPriority(num) {
  if (num === latestChapterNum) return '1.0';
  if (num >= recentThreshold) return '0.95';
  return '0.9';
}

function chapterChangefreq(num) {
  if (num >= recentThreshold) return 'weekly';
  return 'monthly';
}

// Static pages: [path, priority, changefreq, lastmod]
const staticPages = [
  ['',            '1.0', 'daily',   TODAY],
  ['/manga',      '0.9', 'daily',   TODAY],
  ['/characters', '0.8', 'monthly', TODAY],
  ['/about',      '0.7', 'monthly', TODAY],
  ['/terms',      '0.3', 'yearly',  TODAY],
  ['/privacy',    '0.3', 'yearly',  TODAY],
  ['/dmca',       '0.3', 'yearly',  TODAY],
  ['/disclaimer', '0.3', 'yearly',  TODAY],
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

staticPages.forEach(([page, priority, changefreq, lastmod]) => {
  sitemap += `  <url>
    <loc>${DOMAIN}${page}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;
});

chapters.forEach(({ number, releaseDate }) => {
  sitemap += `  <url>
    <loc>${DOMAIN}/chapter/${number}</loc>
    <lastmod>${releaseDate}</lastmod>
    <changefreq>${chapterChangefreq(number)}</changefreq>
    <priority>${chapterPriority(number)}</priority>
  </url>
`;
});

sitemap += `</urlset>`;

const publicDir = path.join(__dirname, '../public');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

console.log(`Sitemap written to ${path.join(publicDir, 'sitemap.xml')}`);
console.log(`  Static pages: ${staticPages.length}`);
console.log(`  Chapter pages: ${chapters.length}`);
console.log(`  Total URLs: ${staticPages.length + chapters.length}`);
console.log(`  Domain: ${DOMAIN}`);
console.log(`  Chapter range: ${chapters[0].number} – ${latestChapterNum}`);
