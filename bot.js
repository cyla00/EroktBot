'use strict'

const Telegram = require('telegram-node-bot');
const TelegramBot = require('node-telegram-bot-api');
const settingsJson = require("./settings.json");
const TelegramBaseController = Telegram.TelegramBaseController;
const TextCommand = Telegram.TextCommand;
const token = settingsJson.token;
const  bot = new Telegram.Telegram(token);
const ero = new TelegramBot(token, {polling: true});


ero.on('message', (msg) => {

const hi = "ciao";
if (msg.text.toString().toLowerCase().indexOf(hi) === 0) {
ero.sendMessage(msg.chat.id,"Hello dear user");
}

const bye = "bye";
if (msg.text.toString().toLowerCase().includes(bye)) {
ero.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
}

});
