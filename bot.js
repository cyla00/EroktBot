'use strict'

const TelegramBot = require('node-telegram-bot-api');
const settingsJson = require("./settings.json");
const token = settingsJson.token;
const bot = new TelegramBot(token, {polling: true});
