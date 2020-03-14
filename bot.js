
const TelegramBot = require('node-telegram-bot-api');
const ogs = require('open-graph-scraper');
const firebase = require('firebase');
const settings = require("./settings.json");
const token = settings.token;
const bot  = new TelegramBot(token, {polling:true});
