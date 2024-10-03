const fs = require('fs');
const path = require('path');


const logsDir = path.join(__dirname, 'Logs');


if (fs.existsSync(logsDir)) {

    fs.readdirSync(logsDir).forEach(file => {
        const filePath = path.join(logsDir, file);
        console.log(`Deleting file: ${filePath}`);
        fs.unlinkSync(filePath);
    });
    
    console.log(`Removing directory: ${logsDir}`);
    fs.rmdirSync(logsDir);
} else {
    console.log('Logs directory does not exist.');
}
