const TelegramBot = require("node-telegram-bot-api");
// const Agent = require("socks5-https-client/lib/Agent");

const token = "7196704376:AAFjUSTPxVoPhuwi4fOcc1t9HMbEgm9T_LE";
const url = "https://t.me/SjclTestBot/mickey";
const ruleUrl = "t.me/SjclTestBot/rule";
const todos = ["创建红包", "查看红包", "查看规则", "我的资产"];

const bot = new TelegramBot(token, { polling: true });

// 匹配/hentai
bot.onText(/\/hentai/, function onLoveText(msg) {
  bot.sendMessage(msg.chat.id, "Are you a hetai?");
});
//匹配/ start

bot.onText(/\/start/, function onLoveText(msg) {
  // const chatId = msg.chat.id;
  // const todoList = todos[chatId];
  const keyboard = {
    inline_keyboard: [
      [
        {
          text: "创建红包",
          url: url,
        },
        { text: "查看红包", url: url },
      ],
      [
        { text: "查看规则", url: ruleUrl },
        { text: "我的资产", callback_data: "assets" },
      ],
    ],
  };
  bot.sendMessage(
    msg.chat.id,
    "👏👏👏  欢迎使用 BaoBao，请点击下方按钮开始「创建红包」",
    {
      reply_markup: keyboard,
    }
  );
});

bot.onText(/\/viewnft/, function onLoveText(msg) {
  const keyboard = {
    inline_keyboard: [[{ text: "查看 NFT", url: url }]],
  };
  bot.sendMessage(
    msg.chat.id,
    "由于 NFT 在区块链上的更新会有延迟，您可以通过下面入口实时查询。",
    {
      reply_markup: keyboard,
    }
  );
});

bot.onText(/\/view_assets/, function onLoveText(msg) {
  const keyboard = {
    inline_keyboard: [[{ text: "我的资产", url: url }]],
  };
  bot.sendMessage(msg.chat.id, "您领取的红包资产已存入余额账户，可随时提现。", {
    reply_markup: keyboard,
  });
});

bot.onText(/\/help/, function onLoveText(msg) {
  const keyboard = {
    inline_keyboard: [[{ text: "加入群聊", url: url }]],
  };
  bot.sendMessage(msg.chat.id, "❓如果需要帮助，请在 BaoBao 社群中联系管理员", {
    reply_markup: keyboard,
  });
});

// 监听用户点击
bot.on("callback_query", (callbackQuery) => {
  const message = callbackQuery.message;
  const data = JSON.parse(callbackQuery.data);

  const action = callbackQuery.data;
  const chatId = callbackQuery.message.chat.id;
  // 根据用户点击的按钮执行相应的操作
  switch (action) {
    case "view":
      bot.sendMessage(chatId, '你点击了 "查看红包" 按钮');
      break;
    case "rules":
      bot.sendMessage(chatId, '你点击了 "查看规则" 按钮');
      break;
    case "assets":
      bot.sendMessage(chatId, '你点击了 "我的资产" 按钮');
      break;
    default:
      // 如果用户点击了未知按钮，则不执行任何操作
      break;
  }
});

// 匹配/echo
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});
