const fs = require('fs');
const { execSync } = require('child_process');

if (!fs.existsSync('models/model.bin')) {
    console.log('Downloading AI model...');
    execSync('wget https://github.com/username/models/raw/main/model.bin -O models/model.bin');
    console.log('Model downloaded!');
}

// هنا باقي كود البوت
console.log('AI Bot is ready!');
