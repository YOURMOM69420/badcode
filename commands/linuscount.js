const Discord = require('discord.js');


module.exports = {
    name: 'linuscount',
    execute(message, args, bot) {
        message.channel.send(`I am in \n${bot.guilds.cache.size} servers!`)
    }
}