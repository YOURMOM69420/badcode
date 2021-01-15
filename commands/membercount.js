const Discord = require('discord.js');

module.exports = {
    name: 'membercount',
    description: 'membercount',
    execute(message, args) {
        const membersInServer = message.guild.memberCount;
        const memberEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.guild.name} Has ${membersInServer} members in the server!`);

        message.channel.send(memberEmbed).catch(err => console.log(err))
    }
}