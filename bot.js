const fs = require('fs');
const path = require('path');
const readlineSync = require('readline-sync');
const { GPT4All } = require('gpt4all');

// مسار الموديل المحلي
const MODEL_PATH = path.join(__dirname, 'models', 'gpt4all-lora-quantized.bin');

// تحقق من وجود الموديل
if (!fs.existsSync(MODEL_PATH)) {
    console.error('Error: Model file not found at', MODEL_PATH);
    process.exit(1);
}

// إنشاء البوت باستخدام الموديل المحلي
const gpt = new GPT4All({ model: MODEL_PATH, backend: 'llama' });

console.log('AI Bot is ready! Type something and press enter.');

(async () => {
    while (true) {
        const input = readlineSync.question('You: ');
        if (input.toLowerCase() === 'exit') break;

        try {
            const response = await gpt.generate({
                prompt: input,
                max_tokens: 150
            });

            console.log('AI:', response);
        } catch (err) {
            console.error('Error generating response:', err.message);
        }
    }
})();
