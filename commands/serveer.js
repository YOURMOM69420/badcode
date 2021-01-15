const Discord = require('discord.js')
const bot = new Discord.Client();

module.exports = {
    name: 'serverlist',
    execute(message, args) {
        if(args[0] == "info"){

            message.channel.send(bot.guilds.cache.size);
            //sends a message with the number of servers
          }
        }
            
    }
