const fs = require('fs');

const text = fs.readFileSync('careers_content.txt', 'utf-8');
const lines = text.split('\n').map(l => l.trim()).filter(l => l);

const jobs = [];
let currentJob = null;
let currentSection = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // Match title: starts with a number or is the very first job
  if (line.match(/^(\d+[A-Z]?\.\s|𝗕𝘂𝘀𝗶𝗻𝗲𝘀𝘀 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁 𝗛𝗲𝗮𝗱)/)) {
    if (currentJob) jobs.push(currentJob);
    currentJob = {
      title: line.replace(/^(\d+[A-Z]?\.\s)/, '').trim(),
      location: "",
      profile: [],
      responsibilities: [],
      requirements: [],
      compensation: []
    };
    currentSection = null;
    continue;
  }

  if (!currentJob) continue;

  if (line.includes('Location Badge:') || line.includes('𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻:')) {
    currentJob.location = line.replace('Location Badge:', '').replace('𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻:', '').trim();
    continue;
  }
  
  if (line.includes('𝗦𝗵𝗶𝗳𝘁:')) {
    currentJob.location += ` | ${line.replace('𝗦𝗵𝗶𝗳𝘁:', '').trim()}`;
    continue;
  }

  if (line.includes('Target Candidate Profile') || line.includes('We are looking for')) {
    currentSection = 'profile';
    if (line.includes('We are looking for')) {
        currentJob.profile.push(line);
    }
    continue;
  }

  if (line.includes('Key Responsibilities') || line.includes('𝗞𝗲𝘆 𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗶𝗯𝗶𝗹𝗶𝘁𝗶𝗲𝘀:')) {
    currentSection = 'responsibilities';
    continue;
  }

  if (line.includes('Technical & Niche AEC Requirements') || line.includes('𝗥𝗲𝗾𝘂𝗶𝗿𝗲𝗺𝗲𝗻𝘁𝘀:')) {
    currentSection = 'requirements';
    continue;
  }

  if (line.includes('Compensation & Incentives Breakdown') || line.includes('𝗪𝗵𝗮𝘁 𝗪𝗲 𝗢𝗳𝗳𝗲𝗿:')) {
    currentSection = 'compensation';
    continue;
  }

  // Skip warnings or non-negotiable headers but capture the text
  if (line.includes('⚠️ ANTI-GENERALIST WARNING:') || line.includes('𝗡𝗼𝗻-𝗡𝗲𝗴𝗼𝘁𝗶𝗮𝗯𝗹𝗲 𝗥𝗲𝗾𝘂𝗶𝗿𝗲𝗺𝗲𝗻𝘁')) {
    currentSection = 'profile';
  }

  if (currentSection && line.length > 2 && line !== 'POSITIONS' && line !== 'SECTION 3: PILLAR 2 — OFFSHORE PRODUCTION & ENGINEERING POSITIONS' && !line.includes('Job Description') && !line.includes('Apply Now:')) {
      const cleanLine = line.replace(/^[•\-\*]\s*/, '').trim();
      if (cleanLine) {
        currentJob[currentSection].push(cleanLine);
      }
  }
}

if (currentJob) jobs.push(currentJob);

fs.writeFileSync('src/data/careers.json', JSON.stringify(jobs, null, 2));
console.log('Parsed ' + jobs.length + ' jobs.');
