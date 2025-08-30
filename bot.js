// bot.js كامل بدون موديل
console.log('AI Bot is ready! Type something and press enter.');

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    console.log(`You said: "${input}"`);
    console.log(`AI says: "Hello! I heard you say '${input}'"`);
});
