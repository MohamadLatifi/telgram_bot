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
  bot.sendAnimation(msg.chat.id, 'CgACAgQAAxkBAANYarKxGA8FCXyS9vWHJtdeQ0UZS5cAAs8hAAKsZJhRq1qAFIr4Q9Q9BA')
  bot.sendAudio(msg.chat.id, 'CQACAgQAAxkBAANgarKzAq-EOR3f5Ywr_6QCdqiJtSYAAtIhAAKsZJhR9y3NH7WHE349BA')
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


// second way we dont need the slash
bot.on('message', msg => {
  if (msg.text === 'best_voice') {
    bot.sendAudio(msg.chat.id, 'CQACAgQAAxkBAAN6arUjaliIC3oZKZhu0fBACD03ckgAAlUeAAJLfahRVNNZ8K_vcgI9BA')
  }
})

//create button for user

//first way

//why we need to add ^ (first-string) and $(last-string)
//because if user type /hi /hiii /himan /hi-and-by it all matches the code below
bot.onText(/^\/hi$/, msg => {
  bot.sendMessage(msg.chat.id, `wecom whats's up`,
    {
      reply_markup: {
        'keyboard': [
          ['nothing much', 'im lucky'],
          ['exit']
        ]
      }
    })
})

//adding handler
bot.on('message', msg => {
  if (msg.text === 'nothing much') {
    bot.sendMessage(msg.chat.id, 'ok')
  }

  if (msg.text === 'im lucky') {
    bot.sendMessage(msg.chat.id, 'great news 😊')
  }
})



//second way
bot.onText(/^\/services$/, msg => {
  bot.sendMessage(msg.chat.id, 'Choose an option:', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: 'website link', url: 'https://google.com'  }, //we dont need a hanler
        ],
        [
        { text: 'Introduction to the others', callback_data: 'intro' },
        //user see the text     //bot recevies the callback_data see the bot.on below
        { text: 'click to see content', callback_data: 'content' }
        ],
        [
          { text: 'about', callback_data: 'about' }
        ]
      ]
    }
  })
})

//query handler

bot.on('callback_query', query => {
  if (query.data === 'content') {
    bot.sendMessage(query.message.chat.id, 'this is goofy bot')
  }

  if (query.data === 'about') {
    bot.answerCallbackQuery(query.id,
      {
        text: 'simple services from our bot ',
        show_alert: true
      })
  }
  if (query.data === 'intro') {
    bot.answerCallbackQuery(query.id,
      {
        text: 'example \n name: \n age:  ',
        show_alert: true
      })
  }

})


console.log('bot is processing')