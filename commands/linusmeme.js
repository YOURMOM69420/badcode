const fetch = require('node-fetch');
const Discord = require('discord.js');


module.exports = {
    name: 'linusmeme',
    description: 'linusmeme',
    async execute(message, args) {
        fetch('https://meme-api.herokuapp.com/gimme/LinusFaces')
            .then(res => res.json())
            .then(async json => {
                let msg = await message.channel.send('Fecthing You A Linus Meme!');
                const linusEmbed = new Discord.MessageEmbed()
                .setTitle(json.title)
                .setImage(json.url)
                .setColor(0xfc7403)
                .setFooter(`link: ${json.postlink} | subreddit: ${json.subreddit}`);

                msg.edit(linusEmbed);
            });
    }
}