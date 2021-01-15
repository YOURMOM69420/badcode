const Dicord = require('discord.js');

module.exports = {
    name: 'lock',
    description: 'lock',
    async execute(message, args) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('YOU CAN NOT DO  THAT!');
        if (!args[0]) return message.channel.send('You did not mention a channel!');
        if (!message.mentions.channels.first()) return message.channel.send('You did not mention a valid channel');

        const role = message.guild.roles.get('757014050239545485');
        if (!role) return message.channel.send('This role does not exist!');

        await message.mentions.channels.forEach(async channel => {
            if (channel.name.startsWith('🔒')) return message.channel.send(`<#${channel.id}> is already locked!`);
            await channel.setName(`🔒${channel.name}`);
            try {
               await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false
                });
                message.channel.send(`<#${channel.id}> Has been locked!`);
            } catch (err) {
                console.log(err);
                message.channel.send('Something has went wrong locking the channels!');
            }
        })

            
    }
}