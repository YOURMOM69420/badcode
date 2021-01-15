module.exports = {
    name: 'clear',
    description: 'clear',
   async execute(message, args) {
        if (message.deletable) {
            message.delete();
        }

        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return (await message.reply("YOU CAN NOT DO THAT!")).then(m => m.delete(5000));
        }

        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return (await message.reply("This is not a number!")).then(m => m.delete(5000));
        }

        let deleteAmount;
        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
        .catch(err => message.reply(`Something went wrong... ${err}`));
    }
}