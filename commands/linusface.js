const Discord = require('discord.js');

module.exports = {
    name: 'linusface',
    description: 'idk',
    execute(message, args) {
        var meme = new Object();
            meme.img = ["https://cdn.discordapp.com/attachments/749495387529937026/755890176705822720/ppp.jpg", "https://cdn.discordapp.com/attachments/757018621699555348/757072269460766790/maxresdefault.jpg"]
        var random = Math.floor(Math.random() * 3);
        const linusEmbed = new Discord.MessageEmbed()
            .setColor(0xfc7403)
            .setTitle('Lol Linus')
            .setImage(meme.img[(random)])
            .setAuthor(message.author.username)
        try {
            message.channel.send(linusEmbed)
 
        }  catch {
            message.channel.send('Something is wrong')
        }
 
    }
 
    }
    

