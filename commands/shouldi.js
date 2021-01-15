module.exports = {
    name: 'shouldi',
    execute(message, args) {
        const sayMessage = args.join(" ");
        var random = Math.floor(Math.random() * 3);
        var text = new Object();
        text.msg = [`You should ${sayMessage}`, `You shouldn't ${sayMessage}`, `I don't know if you should ${sayMessage}`]
        message.channel.send(text.msg[(random)]);
    }
}