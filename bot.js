const TelegramBot = require('node-telegram-bot-api');
const settings = require("./settings.json");
const token = settings.token;
const bot  = new TelegramBot(token, {polling:true});
