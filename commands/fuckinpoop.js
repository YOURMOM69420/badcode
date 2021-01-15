const { execute } = require("./linuscount");

module.exports = {
    name: 'poop',
    async execute(message, args){
        if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('no')
        

        const pingRole = message.guild.roles.cache.get('790038777459769385')
        const pee = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const poop = 'POOP'

        if (!pingRole) return message.channel.send('no role')
        if (!args[0]) return message.channel.send(" Wrong Usage ")
        if (!pee) return message.channel.send('User pinged not here')

        await pee.roles.add(pingRole.id).catch(err => message.channel.send('I could not add role.'))
        await pee.setNickname(poop)
 
    }
}