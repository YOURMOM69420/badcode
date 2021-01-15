module.exports = {
    name: 'nuke',
   async execute(message, args){
if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('No')

let reason = args.join(" ")
const nukeChannel = message.channel

if (!reason) reason = "no reason given"
if (!nukeChannel.deleteable) return message.channel.send('not deleteable')


await nukeChannel.clone()
await nukeChannel.delete(reason)
    }
} 