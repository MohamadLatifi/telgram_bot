require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');

const { SocksProxyAgent } = require('socks-proxy-agent');

const agent = new SocksProxyAgent(process.env.SOCKS_PROXY);

const bot = new TelegramBot(process.env.BOT_TOKEN, {
  polling: true,
  request: {
    agent
  }
});

//Regex syntax:regular expretion syntax
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'MIbombo');
  bot.sendAnimation(msg.chat.id,'CgACAgQAAxkBAANYarKxGA8FCXyS9vWHJtdeQ0UZS5cAAs8hAAKsZJhRq1qAFIr4Q9Q9BA')
  bot.sendAudio(msg.chat.id,'CQACAgQAAxkBAANgarKzAq-EOR3f5Ywr_6QCdqiJtSYAAtIhAAKsZJhR9y3NH7WHE349BA')
});


bot.onText(/\/im_what/, (msg) => {
  bot.sendMessage(msg.chat.id, 'bad ass engineer');
});

bot.onText(/\/hell_yhe/, (msg) => {
  bot.sendMessage(msg.chat.id, 'heeelllll yheeeeeee');
});


//you can see that the id from chat obj in terminal is your first method in sendMessage
bot.onText(/\/info/, info => {
  bot.sendMessage(info.chat.id, "info")
  console.log(info)
})

//using chat property like first_name
bot.onText(/\/welcome/, user => {
  bot.sendMessage(user.chat.id, `به روباتوم خوش اومدی  ${user.chat.first_name} \n چه کنم مشتی؟`)

})


// bot.on("message",user=>{
//   bot.sendMessage(user.chat.id, "دستور نامعتبر هست \n err 400 bad request")
// })


//telegram give's id to each file


//use this to get id 
// bot.on('message', info => {
//   console.log(info)
// })
//send the photo or audio and you will get a id and use it


bot.onText(/\/really?/, user => {
  bot.sendPhoto(user.chat.id, 'AgACAgQAAxkBAANEarKs9aXaQb_XQDzjKBYQ7-xQEJYAAsERaxusZJhRWgqL3mPRji8BAAMCAANzAAM9BA')
})


console.log('bot is processing')