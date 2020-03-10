const TelegramBot = require('node-telegram-bot-api');
const botSettings = require("./settings.json");
const token = botSettings.token;
const bot = new TelegramBot(token, {polling: true});

// comando + risposta START
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "\"Sono tanto semplici li uomini, e tanto obediscono alle necessità presenti, che colui che inganna troverà sempre chi si lascerà ingannare☕...\"");
});

// interazione bot
bot.on('message', (msg) => {
  var ciao = "ciao";
  if (msg.text.toString().toLowerCase().indexOf(ciao) === 0) {
    bot.sendMessage(msg.chat.id, "hey come stai");
  }
});

bot.on('message', (msg) => {
  var bene = "bene";
  if (msg.text.toString().toLowerCase().indexOf(bene) === 0) {
    bot.sendMessage(msg.chat.id, "mi fa piacere");
  }
});

bot.on('message', (msg) => {
  var tu = "e tu?";
  if (msg.text.toString().toLowerCase().indexOf(tu) === 0) {
    bot.sendMessage(msg.chat.id, "meditando sull'esistenza...");
  }
});

bot.on('message', (msg) => {
  var tu = "machiavelli";
  if (msg.text.toString().toLowerCase().indexOf(tu) === 0) {
    bot.sendMessage(msg.chat.id, "\"Consigliati delle cose che tu dei fare con molti; quello che dipoi vuoi fare conferisci con pochi☕...\"");
  }
});

bot.on('message', (msg) => {
  var tu = "platone";
  if (msg.text.toString().toLowerCase().indexOf(tu) === 0) {
    bot.sendMessage(msg.chat.id, "\"È questo che voleva dire Protagora quando sosteneva che l'uomo è la misura di tutte le cose, e cioè che per me i fatti sono tali quali appaiono a me, e per te quali appaiono a te☕...\"");
  }
});

bot.on('message', (msg) => {
  var tu = "cartesio";
  if (msg.text.toString().toLowerCase().indexOf(tu) === 0) {
    bot.sendMessage(msg.chat.id, "\"Se vuoi essere un vero cercatore della verità, è necessario che almeno una volta nella tua vita tu dubiti, per quanto possibile, di tutte le cose☕...\"");
  }
});

bot.on('message', (msg) => {
  var tu = "freud";
  if (msg.text.toString().toLowerCase().indexOf(tu) === 0) {
    bot.sendMessage(msg.chat.id, "\"Le incoerenze, le stravaganze e le follie degli uomini potrebbero essere viste in una luce analoga alle loro perversioni, accettando le quali gli uomini riescono a evitare le rimozioni☕...\"");
  }
});

bot.on('message', (msg) => {
  var tu = "shopenauer";
  if (msg.text.toString().toLowerCase().indexOf(tu) === 0) {
    bot.sendMessage(msg.chat.id, "\"Si dovrebbero usare parole ordinarie per dire cose insolite☕...\"");
  }
});

// comandi basici bot

// ciao
bot.onText(/\/ciao/, (msg) => {
  bot.sendMessage(msg.chat.id, "hey!");
});

// chaos
bot.onText(/\/botpic/, (msg) => {
  bot.sendPhoto(msg.chat.id, "https://d3rf6j5nx5r04a.cloudfront.net/9BMzIa9Cq1jIOfyrHXKbMKynqaI=/548x750/product/e/0/0bbf9f5150c64afa884816a5459dd0b5_opt.jpg");

});

bot.onText(/\/chaos/, (msg) => {
  bot.sendPhoto(msg.chat.id, "https://www.artweek.com/sites/default/files/styles/700/public/artist-artwork/chaos1.jpg?itok=88qhw7J6", {
    caption: "\"Non piangere perché è finita. \nSorridi perché è successo☕...\""
  });

});
