const Discord = require('discord.js');
const bot = new Discord.Client();
module.exports = {
    name: 'botinfo',
    execute(message, args) {
        const { bot } = message
        
    const icon = bot.displayAvatarURL()


        const botEmbed = new Discord.MessageEmbed()
        .setTitle("Bot Info")
        .setThumbnail(icon)

        message.channel.send(botEmbed).catch(err => console.log(err));


    }
}