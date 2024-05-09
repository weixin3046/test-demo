const TelegramBot = require("node-telegram-bot-api");
const Agent = require("socks5-https-client/lib/Agent");

const token = "7196704376:AAFjUSTPxVoPhuwi4fOcc1t9HMbEgm9T_LE";
const bot = new TelegramBot(token, {
  polling: true,
  request: {
    // 设置代理
    agentClass: Agent,
    agentOptions: {
      //   socksPassword: "填入你登梯子时的密码",
      socksHost: "127.0.0.1",
      socksPort: "21878",
    },
  },
});

// 匹配/hentai
bot.onText(/\/hentai/, function onLoveText(msg) {
  bot.sendMessage(msg.chat.id, "Are you a hetai?");
});

// 匹配/echo
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});
