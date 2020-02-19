const TelegramBot = require('node-telegram-bot-api');
const token = '996898831:AAEU_2mk3oBmWx_ZI8axooyZXKeweyT5cng';
const bot = new TelegramBot(token, {polling: true});


bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});

bot.on('hey!', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId);
});
