const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'help',
    execute(message, args) {
        const help = new Discord.MessageEmbed()
            .setThumbnail("https://cdn.discordapp.com/attachments/749492101942870046/751277203970588762/discordmod.jpg")
            .setTitle('Command Lists')
            .setDescription('`L!modhelp` `L!funhelp` `L!Otherhelp`')
            .setColor(0xfc7403)
            .setThumbnail('https://cdn.discordapp.com/attachments/741860765052567564/743215813183537333/zoomlinus.jpg')
            .setFooter("Linus Bot Command Lists", "https://cdn.discordapp.com/attachments/741860765052567564/743223030024503426/lenes.jpg", "https://discord.com/oauth2/authorize?client_id=741385001026977903&permissions=8&scope=bot")
            message.channel.send(help);
    }
}