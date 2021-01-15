module.exports = {
    name: 'cool',
    execute(message, args){
        const pee = 'poop'
        message.channel.send(pee)
    }
}