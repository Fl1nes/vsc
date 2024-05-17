const TB = require('node-telegram-bot-api')

BOT_TOKEN = '7008755385:AAEwz_Gu9G7TABieQN0Dsp65qHNAs5FyHLI'

bot = new TB(BOT_TOKEN, {
    polling: true
})

bot.onText(/\/start/, message => {
   bot.sendMessage(message.chat.id, "Hi!", {
    reply_to_message_id: message.message_id
   })

   bot.sendMessage(message.chat.id, "По кнопке вы можете перейти на мой акк в тик токе и найти много хорошего для вашего ПК и для фортнайта", {
    reply_markup:{
        inline_keyboard:[
            [{text:'Мой тик ток', url : 'https://www.tiktok.com/@mrw.fl1nes'}],
            [{text:'правильные наcтройки интренета', url : 'https://www.youtube.com/@teta7n'}],
            [{text:'персонализация WIN10|без програм!', url : 'https://www.youtube.com/@teta7n'}],
            [{text:'настройки NVIDIA и всё про приложение NVIDIA APP', url : 'https://www.youtube.com/@teta7n'}],
            [{text:'настройки EXITLAG', url : 'https://www.youtube.com/@teta7n'}],
            [{text:'оптимизация WIN10|без програм!', url : 'https://www.youtube.com/@teta7n'}],
            [{text:'как понизить дилей в фортнайт|без програм!', url :  'https://www.youtube.com/@teta7n'}]
        ]
    }
   })
})
