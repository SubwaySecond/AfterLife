const discord = require('discord.js')

module.exports = {
    name: 'invites',
    description: "This command lock a channel!",
    aliases: "inv",
    execute : async(message, args , cmd, client) => {
      let user = message.mentions.users.first() || message.author
      let invites = await message.guild.fetchInvites();
      let userInv = invites.filter(u => u.inviter && u.inviter.id === user.id)

    if(userInv.size <= 0) {
        return message.channel.send(`${user.username} don't have any invites`)
    }

    let invCodes = userInv.map(x => x.code).join('\n')
    let i = 0;
    userInv.forEach(inv => i += inv.uses)

    const embed = new discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .addField('```User Invites```', i)
    .setColor('#2F3136')
    .setTimestamp()
    message.channel.send(embed)
  }
};