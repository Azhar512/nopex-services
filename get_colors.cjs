const https = require('https');

https.get('https://aecom.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const matches = data.match(/#[0-9a-fA-F]{6}/g);
    const counts = {};
    if (matches) {
      matches.forEach(m => {
        const lower = m.toLowerCase();
        counts[lower] = (counts[lower] || 0) + 1;
      });
      const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 20);
      console.log(sorted);
    }
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
