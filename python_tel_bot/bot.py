import telebot

bot =telebot.TeleBot("token")

@bot.message_handler(commands=['start'])
def welcome(message):
  bot.send_message(message.chat.id,'FAAAAHHHH')

bot.polling()