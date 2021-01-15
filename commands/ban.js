module.exports = {
    name: 'ban',
    description: 'kick a user',
    execute(message, args) {
        if (message.member.hasPermission("BAN_MEMBERS")) {
            const userBan = message.mentions.users.first();

            if (userBan) {
                var member = message.guild.member(userBan);

                if (member) {
                    member.ban({
                        reason: 'You Broke The Rules!'
                    }).then(() => {
                        message.reply(`${userBan.tag} was Banned from the server!`)
                    })
                } else {
                   message.reply('That User Is Not Here!'); 
                }
            } else {
                message.reply('You Need To State A User To Ban!')
            } 

        } else {
            message.reply('YOU DO NOT HAVE THE CORRECT PERMISSIOMNS!')
        }   
    }
}