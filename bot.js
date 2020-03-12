'use strict'

const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const TextCommand = Telegram.TextCommand;
const settingsJson = require("./settings.json");
const settingsBat = require("./settings.bat");
const token = settingsJson.token;
const tg = new Telegram.Telegram(token);
