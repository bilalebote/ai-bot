const fs = require('fs');
const path = require('path');
const readlineSync = require('readline-sync');
const { GPT4All } = require('gpt4all');

// إعداد الموديل
const MODEL_PATH = path.join(__dirname, 'models', 'gpt4all-lora-quantized.bin');

if (!fs.existsSync(MODEL_PATH)) {
    console.log('Downloading GPT4All model...');
    fs.mkdirSync(path.join(__dirname, 'models'), { recursive: true });
    const download = require('child_process').execSync;
    download('wget https://gpt4all.io/models/gpt4all-lora-quantized.bin -O ' + MODEL_PATH);
    console.log('Model downloaded!');
}

// تهيئة البوت
const gpt = new GPT4All({ model: MODEL_PATH });

console.log('AI Bot is ready! Type something and press enter.');

(async () => {
    while (true) {
        const input = readlineSync.question('You: ');
        if (input.toLowerCase() === 'exit') break;

        const response = await gpt.generate({
            prompt: input,
            max_tokens: 150
        });

        console.log('AI:', response);
    }
})();
