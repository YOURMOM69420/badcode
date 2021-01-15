const fetch = require('node-fetch');
const Discord = require('discord.js');


module.exports = {
    name: 'linus',
    description: 'linusmeme',
    async execute(message, args) {
        fetch('https://meme-api.herokuapp.com/gimme/LinusTechTips')
            .then(res => res.json())
            .then(async json => {
                let msg = await message.channel.send('Fecthing You A Post from the offical ltt subreddit!');
                const linusEmbed = new Discord.MessageEmbed()
                .setTitle(json.title)
                .setImage(json.url)
                .setColor(0xfc7403)
                .setFooter(`link: ${json.postlink} | subreddit: ${json.subreddit}`);

                msg.edit(linusEmbed);
            });
    }
}