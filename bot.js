const TelegramBot = require('node-telegram-bot-api');
const token = '996898831:AAHerDdP3Rmlqw3GuRzd34hiQ7r6VEmXjMQ';
const bot = new TelegramBot(token, {polling: true});

              // comando + risposta START
bot.onText(/\/start/, (msg) => {
bot.sendMessage(msg.chat.id, "\"Sono tanto semplici li uomini, e tanto obediscono alle necessità presenti, che colui che inganna troverà sempre chi si lascerà ingannare☕...\"");
});

            // comandi basici bot

// ciao
bot.onText(/\/ciao/, (msg) => {
bot.sendMessage(msg.chat.id, "hey!");
});

// machiavelli
bot.onText(/\/machiavelli/, (msg) => {
bot.sendMessage(msg.chat.id, "\"Consigliati delle cose che tu dei fare con molti; quello che dipoi vuoi fare conferisci con pochi☕...\"");
});

// platone
bot.onText(/\/platone/, (msg) => {
bot.sendMessage(msg.chat.id, "\"“È questo che voleva dire Protagora quando sosteneva che l'uomo è la misura di tutte le cose, e cioè che per me i fatti sono tali quali appaiono a me, e per te quali appaiono a te.”☕...\"");
});

// cartesio
bot.onText(/\/machiavelli/, (msg) => {
bot.sendMessage(msg.chat.id, "\"Consigliati delle cose che tu dei fare con molti; quello che dipoi vuoi fare conferisci con pochi☕...\"");
});


// freud
bot.onText(/\/machiavelli/, (msg) => {
bot.sendMessage(msg.chat.id, "\"Consigliati delle cose che tu dei fare con molti; quello che dipoi vuoi fare conferisci con pochi☕...\"");
});


// shopenauer
bot.onText(/\/machiavelli/, (msg) => {
bot.sendMessage(msg.chat.id, "\"Consigliati delle cose che tu dei fare con molti; quello che dipoi vuoi fare conferisci con pochi☕...\"");
});
