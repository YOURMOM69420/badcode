module.exports = {
    name: 'givepc',
    execute(message, args) {
        message.channel.send('Here is your pc!').then(message.react('🖥️'));
    }
}