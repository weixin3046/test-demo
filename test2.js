const Agent = require("socks5-https-client/lib/Agent");

const TelegramBot = require("node-telegram-bot-api");
// replace the value below with the Telegram token you receive from @BotFather
const token = "7196704376:AAFjUSTPxVoPhuwi4fOcc1t9HMbEgm9T_LE";

// Create a bot that uses 'polling' to fetch new updates
// const bot = new TelegramBot(token, {
//   request: {
//     polling: true,
//     agentOptions: {
//       socksHost: "127.0.0.1",
//       socksPort: "21878",
//     },
//   },
// });

const bot = new TelegramBot(token, {
  polling: true,
  request: {
    agentClass: Agent,
    agentOptions: {
      socksHost: "127.0.0.1",
      socksPort: 21878,
    },
  },
});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
  console.log(msg);
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, "Received your message");
});
