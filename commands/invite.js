const Discord = require('discord.js');

module.exports = {
    name: 'invite',
    execute(message, args) {
        const invite = new Discord.MessageEmbed()
        .setTitle("linus invite link!")
        .setURL("https://discord.com/oauth2/authorize?client_id=741385001026977903&scope=bot&permissions=2146958847")
        .setColor(0xfc7403)
        message.channel.send(invite);
    }
}