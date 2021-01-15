const Discord = require('discord.js');
const bot = new Discord.Client();
const { token, prefix, toptoken } = require('./botconfig.json');
const fs = require('fs');
const DBL = require("dblapi.js");
const { error } = require('console');
const dbl = new DBL(toptoken, bot);

bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.
endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}



bot.once("ready", () => {
    console.log('Tech Tips Ready!')

    bot.users.fetch('376457241911361537').then((user) => {
        user.send('I am now online!')
    })

    
    let serversIn = bot.guilds.cache.size;
    bot.user.setPresence({
        activity: {
            name: `${serversIn} Servers Are Loving Linus!`,
            type: 'WATCHING'
        },
        status: 'online'
       
    })
})
 
dbl.on('posted', () => {
    console.log('Server count posted!');
  })


  dbl.on('error', e => {
    console.log(`Oops! ${e}`);
   })

   bot.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name + guild.id);
      const embed0 = new Discord.MessageEmbed()
          .setTitle('Thanks For Adding Me to Your Server!')
          .addField('Info', 'Do L!help to get started! Also vote for me on top.gg')
          .setColor(0xfc7403)
      guild.systemChannel.send(embed0);


      bot.on("")
     
})

bot.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    const command = bot.commands.get(commandName) || bot.commands.find
    (cmd => cmd.aliases && cmd.aliases.include(commandName));


    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('There Is An Issue With This Command!');
    }

        
})















bot.login(token);
