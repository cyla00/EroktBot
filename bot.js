const TelegramBot = require('node-telegram-bot-api');
const token = '996898831:AAEU_2mk3oBmWx_ZI8axooyZXKeweyT5cng';
const bot = new TelegramBot(token, {polling: true});


bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});

bot.onText(/\/start/, (msg) => {
bot.sendMessage(msg.chat.id, "Eccomi, come ti posso aiutare..?");
});

bot.onText(/\/ciao/, (msg) => {
bot.sendMessage(msg.chat.id, "hey!");
});
