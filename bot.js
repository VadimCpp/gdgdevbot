const Bot = require('node-telegram-bot-api');
const token = process.env.BOT_ACCESS_TOKEN;
const isProduction = process.env.NODE_ENV === 'production';
const DevBotApp = require('./src/DevBotApp.js');

let devBotApp = new DevBotApp();
let bot;

if (isProduction) {
    bot = new Bot(token);
    bot.setWebHook(process.env.HEROKU_URL + bot.token);
} else {
    bot = new Bot(token, { polling: true });
    bot.deleteWebHook();
}

console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode');

bot.on('message', (msg) => {
    devBotApp.handleMessage(msg, bot);
});

module.exports = bot;
