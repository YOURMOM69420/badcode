const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
    name: 'roast',
    description: 'roast a user',
   async execute(message, args) {
    if (!args[0]) return message.channel.send('Invalid Command Format: \`!roast @user\`');
    const mentionedMember = message.mentions.members.first();
    if (!mentionedMember) return message.channel.send('The User Mentioned Is Not In This Server!');
    let msg = await message.channel.send('Here is your roast!');
    fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
    .then(res => res.json())
    .then(json => {
        const roastEmbed = new Discord.MessageEmbed()
        .setTitle(mentionedMember.user.tag + ` ${json.insult}`);
        msg.edit(roastEmbed);
    });

    }
    }