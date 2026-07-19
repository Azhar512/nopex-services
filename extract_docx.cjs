const mammoth = require('mammoth');
const fs = require('fs');

mammoth.extractRawText({path: 'Nopex-Service-Pages-Full-Template-Content.docx'})
    .then(function(result) {
        fs.writeFileSync('seo_content.txt', result.value);
        console.log("Extraction complete!");
    })
    .catch(function(err) {
        console.error(err);
    });
