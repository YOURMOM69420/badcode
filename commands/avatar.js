const Discord = require("discord.js");

module.exports = {
    name: 'avatar',
    execute(message, args) {
  let human = message.mentions.users.first();
  if (!human) human = message.author;

  let embed = new Discord.MessageEmbed()
    .setImage(`${human.displayAvatarURL({dynamic: true, size: 2048})}`)
    .setColor(0xfc7403)
    .setFooter(`${human.username} Avatar`)

  message.channel.send(embed)
    }
}