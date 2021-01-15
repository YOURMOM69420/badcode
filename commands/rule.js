module.exports = {
    name: 'rule',
    description: 'rule',
   async execute(message, args) {
      const techtip = parseInt(args[0], 10);

      if (!techtip || techtip < 1 || techtip > 5 ) return message.reply('Please provide a number between 1 and 5');

      if (techtip) {
         const botChannel = await message.guild.channels.find( ch => ch.name.includes('command'));
         
         if (techtip === 1) return message.channel.send('Never Buy Airpods!');

         if (techtip === 2) return message.channel.send('Never Buy Radeon GPU!');

         if (techtip === 3) return message.channel.send('techtip3!');

         if (techtip === 4) return message.channel.send('techtip4!');

         if (techtip === 5) return message.channel.send('techtip5!');
        }
        
    }
}