const Discord = require('discord.js');

module.exports = {
    name: 'flipcoin',
    description: 'idk',
    execute(message, args) {
        var coin = new Object();
            coin.img = ["https://cdn.discordapp.com/attachments/757016626062164078/758036741293604904/heads.jpg", "https://cdn.discordapp.com/attachments/757016626062164078/758036765075570859/tails.jpg"]
        var random = Math.floor(Math.random() * 2);
        const linusEmbed = new Discord.MessageEmbed()
            .setColor(0xfc7403)
            .setTitle('Here Is Your Flip!')
            .setImage(coin.img[(random)])
            .setAuthor(message.author.username)
        try {
            message.channel.send(linusEmbed)
 
        }  catch {
            message.channel.send('Something is wrong')
        }
 
    }
 
    }