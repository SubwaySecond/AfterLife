  module.exports = {
    name: 'leaderboard',
    description: "Tracks all of layers invites",
    aliases: 'lboard',
    execute: async(message, args, cmd, client, Discord) =>{
    const { guild } = message

    guild.fetchInvites().then((invites) => {
      const inviteCounter = {
        
      }

      invites.forEach((invite) => {
        const { uses, inviter } = invite
        const { username, discriminator } = inviter

        const name = `${username}#${discriminator}`

        inviteCounter[name] = (inviteCounter[name] || 0) + uses
      })

      let replyText = ''

      const sortedInvites = Object.keys(inviteCounter).sort(
        (a, b) => inviteCounter[b] - inviteCounter[a]
      )

      console.log(sortedInvites)

      sortedInvites.length = 5

      for (const invite of sortedInvites) {
        const count = inviteCounter[invite]
        replyText += `\n**${invite} has invited ${count} member(s)!**\n`
      }
      const newEmbed = new Discord.MessageEmbed()
        .setTitle("`Top 5 Server invites`")
        .setColor('#2F3136')  
        .setDescription(replyText)
        .setTimestamp()
      message.channel.send(newEmbed);
    })
  },
}
