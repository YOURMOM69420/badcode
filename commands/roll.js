module.exports = {
    name: 'rolldice',
    description: 'roll',
    execute(message, args) {
        var random = Math.floor(Math.random() * 6);
        var text = new Object();
        text.msg = ["You Rolled A 6", "You Rolled A 5", "You Rolled A 4", "You Rolled A 3", "You Rolled A 2", "You Rolled A 1"]
        message.reply(text.msg[(random)]);

    }
}