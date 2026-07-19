const fs = require('fs');
const rawData = fs.readFileSync('src/data/services.json', 'utf8');
const services = JSON.parse(rawData);

const updatedServices = services.filter(service => service.discipline !== 'industrial');

fs.writeFileSync('src/data/services.json', JSON.stringify(updatedServices, null, 2));
console.log("Successfully removed industrial services from services.json!");
