module.exports = {
    name: 'techtip',
    description: 'roll',
    execute(message, args) {
        var random = Math.floor(Math.random() * 3);
        var text = new Object();
        text.msg = ["Never Buy AirPods!", "Never Buy Radeon GPU Nvidia Is Far Supeior!", "Buy PC Not Console!"]
        message.channel.send(text.msg[(random)]);

    }
}