const Discord = require('discord.js');

module.exports = {
    name: 'modhelp',
    description: 'modhelp',
    execute(message, args) {
        const helpmoderation = new Discord.MessageEmbed()
            .setAuthor("Moderation Commands", "https://cdn.discordapp.com/attachments/749492101942870046/751277203970588762/discordmod.jpg")
            .setTitle('Mod Commands')
            .setDescription('L!kick L!ban L!clear(number from 2-100) L!lockdown L!mute')
            .setColor(0xfc7403)
            .setThumbnail('https://cdn.discordapp.com/attachments/741860765052567564/743215813183537333/zoomlinus.jpg')
            .setFooter("linus bot mod commands", "https://cdn.discordapp.com/attachments/741860765052567564/743223030024503426/lenes.jpg", "https://discord.com/oauth2/authorize?client_id=741385001026977903&permissions=8&scope=bot")
            message.channel.send(helpmoderation);
    }
}