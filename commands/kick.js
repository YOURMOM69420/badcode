module.exports = {
    name: 'kick',
    description: 'kick a user',
    execute(message, args) {
        if (message.member.hasPermission("KICK_MEMBERS")) {
            const userKick = message.mentions.users.first();

            if (userKick) {
                var member = message.guild.member(userKick);

                if (member) {
                    member.kick({
                        reason: 'You Broke The Rules!'
                    }).then(() => {
                        message.reply(`${userKick.tag} was kicked from the server!`)
                    })
                } else {
                   message.reply('That User Is Not Here!'); 
                }
            } else {
                message.reply('You Need To State A User To Kick!')
            } 

        } else {
            message.reply('YOU DO NOT HAVE THE CORRECT PERMISSIOMNS!')
        }   
    }
}