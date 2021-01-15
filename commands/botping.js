const Discord = require('discord.js')
const bot = new Discord.Client()

module.exports = {
    name: 'botping',
    description: 'finds bots ping',
    execute(message, args) {
       message.reply('Finding My Ping:').then((resultMessage) => {
           const ping = resultMessage.createdTimestamp - message.createdTimestamp

           resultMessage.edit(`Bot Latency: ${ping}, API Latency: ${bot.ws.ping}`)
       })
    }
}