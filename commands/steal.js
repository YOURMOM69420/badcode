module.exports = {
    name: 'stealtech',
    description: 'roll',
    execute(message, args) {
            let mentionedUser = message.mentions.users.first(); 
            if (!mentionedUser) return message.reply('You did not mention a user!');

            var random = Math.floor(Math.random() * 6);
        var text = new Object();
        text.msg = [`You stole ${mentionedUser}'s PC!`, `You stole ${mentionedUser}'s Laptop!`, `You stole ${mentionedUser}'s Tablet!`, `You stole ${mentionedUser}'s Phone!`, `You stole ${mentionedUser}'s Headphones!`, `You stole ${mentionedUser}'s TV!`]
        message.reply(text.msg[(random)]);
        
    }
}