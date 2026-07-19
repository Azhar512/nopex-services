const fs = require('fs');

const rawText = fs.readFileSync('seo_content.txt', 'utf8');
const existingData = JSON.parse(fs.readFileSync('src/data/services.json', 'utf8'));

// Split blocks by "Title Tag:" as a reliable anchor
const blocks = rawText.split('Title Tag:').slice(1);

const newServices = [];

blocks.forEach(block => {
    // Re-attach "Title Tag:" since it was consumed by split
    const text = 'Title Tag:' + block;

    const extractLine = (regex) => {
        const match = text.match(regex);
        return match ? match[1].trim() : '';
    };

    const seoTitle = extractLine(/Title Tag:\s*(.*)/i);
    const seoMetaDescription = extractLine(/Meta Description:\s*(.*)/i);
    const url = extractLine(/URL:\s*(.*)/i);
    const h1 = extractLine(/H1:\s*(.*)/i);

    if (!url || !h1) return; // Skip if invalid

    const parts = url.split('/').filter(Boolean);
    const discipline = parts[1];
    const slug = parts[2];

    if (discipline === 'industrial') {
        return; // Skip industrial
    }

    // Extract description (paragraph between H1 and What's Included)
    const descMatch = text.match(/H1:[^\n]*\n+([\s\S]*?)(?:What's Included|Process)/i);
    const desc = descMatch ? descMatch[1].replace(/\n/g, ' ').trim() : '';

    // Extract What's Included
    const features = [];
    const featuresMatch = text.match(/What's Included\s*\n([\s\S]*?)Process/i);
    if (featuresMatch) {
        const featureLines = featuresMatch[1].split('\n').map(l => l.replace(/^[•\-\d\.\s]+/, '').trim()).filter(Boolean);
        features.push(...featureLines);
    }

    // Extract Process
    const process = [];
    const processMatch = text.match(/Process\s*\n([\s\S]*?)Sectors Commonly Served/i);
    if (processMatch) {
        const processLines = processMatch[1].split('\n').map(l => l.replace(/^[\d\.\s]+/, '').trim()).filter(Boolean);
        process.push(...processLines);
    }

    // Extract Sectors
    let sectors = [];
    const sectorsMatch = text.match(/Sectors Commonly Served\s*\n([\s\S]*?)FAQ Accordion/i);
    if (sectorsMatch) {
        sectors = sectorsMatch[1].replace(/\n/g, '').split('·').map(s => s.trim()).filter(Boolean);
    }

    // Extract FAQs
    const faqs = [];
    const faqMatch = text.match(/FAQ Accordion\s*\n([\s\S]*?)(?:CTA Band|$)/i);
    if (faqMatch) {
        const faqText = faqMatch[1].trim();
        const qMatches = [...faqText.matchAll(/Q:\s*(.*)/gi)];
        const aMatches = [...faqText.matchAll(/A:\s*(.*)/gi)];
        
        for (let i = 0; i < qMatches.length; i++) {
            if (qMatches[i] && aMatches[i]) {
                faqs.push({
                    q: qMatches[i][1].trim(),
                    a: aMatches[i][1].trim()
                });
            }
        }
    }

    // Find existing service to inherit image and tagline
    let existing = existingData.find(s => s.name && s.name.toLowerCase() === h1.toLowerCase());
    if (!existing) {
        existing = existingData.find(s => s.slug && (slug.includes(s.slug) || s.slug.includes(slug)));
    }

    newServices.push({
        id: slug, // Keep id for DisciplineTemplate
        slug: slug,
        discipline: discipline,
        name: h1,
        seoTitle: seoTitle,
        seoMetaDescription: seoMetaDescription,
        summary: desc, // Map to summary
        description: desc, // Map to description
        tagline: existing && existing.tagline ? existing.tagline : 'Engineering Excellence',
        image: existing && existing.image ? existing.image : 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
        deliverables: features,
        sectors: sectors,
        process: process,
        faqs: faqs
    });
});

fs.writeFileSync('src/data/services.json', JSON.stringify(newServices, null, 2));
console.log(`Successfully migrated ${newServices.length} services!`);
