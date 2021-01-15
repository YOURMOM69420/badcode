const Dicord = require('discord.js');

module.exports = {
    name: 'unlock',
    description: 'unlock',
    async execute(message, args) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('YOU CAN NOT DO  THAT!');
        if (!args[0]) return message.channels.send('You did not mention a channel!');
        if (!message.mentions.channels.first()) return message.channel.send('You did not mention a valid channel');

        const role = message.guild.roles.get('757014050239545485');
        if (!role) return message.channel.send('This role does not exist!');

        await message.mentions.channels.forEach(async channel => {
            if (!channel.name.startsWith('🔒')) return message.channel.send(`<#${channel.id}> is already unlocked!`);
            await channel.setName(channel.name.substring(1));
            try {
               await channel.overwritePermissions(role, {
                    SEND_MESSAGES: true
                });
                message.channel.send(`<#${channel.id}> Has been unlocked!`);
            } catch (err) {
                console.log(err);
                message.channel.send('Something has went wrong unlocking the channels!');
            }
        })

            
    }
}