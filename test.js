process.env.NTBA_FIX_319 = 1;
const TelegramBot = require("node-telegram-bot-api");
const Agent = require("socks5-https-client/lib/Agent");
const token = "7196704376:AAFjUSTPxVoPhuwi4fOcc1t9HMbEgm9T_LE";

const bot = new TelegramBot(token, {
  polling: true,
  request: {
    agentClass: Agent,
    agentOptions: {
      socksHost: "127.0.0.1",
      socksPort: "21878",
      // socksUsername: "qialuo0110@163.com",
      // socksPassword: "lv134679258.0",
    },
  },
});

bot.on("message", (msg) => {
  bot.sendMessage(msg.chat.id, "hello");
});

bot.on("polling_error", (msg) => console.log(msg));
