const Discord = require('discord.js');

module.exports = {
    name: 'userinfo',
    description: 'userinfo',
    execute(message, args) {
        let mentionedMember = message.mentions.members.first();
        let mentionedUser = message.mentions.users.first();
        if (!mentionedMember) mentionedMember = message.author;
        if (!mentionedUser) mentionedUser = message.author;

        const Userembed = new Discord.MessageEmbed()
        .setTitle(`User Info For ${mentionedUser.username}`)
        .setThumbnail(`${mentionedUser.displayAvatarURL({dynamic: true, size: 2048})}`)
        .addField('Username:', `${mentionedUser.username}`)
        .addField('User ID:', `${mentionedUser.id}`)
        .addField('Account Made At:', `${mentionedUser.createdAt}`)
        .addField('Joined The Server At:', `${mentionedMember.joinedAt}`)
        .addField('User Status:', `${mentionedUser.presence.status}`)
        .setTimestamp()
        .setColor(0xfc7403)

        message.channel.send(Userembed).catch(err => console.log(err));
        
    }
}