const Discord = require("discord.js")
module.exports = {
    name: 'removerole',
    description: "This command revome a role from a member!",
    async execute(message, args, cmd, client, Discord){
      if(message.member.roles.cache.some(r => r.name === "👑Founder")){
    let role;
    if(args[1] && isNaN(args[1])) role = message.mentions.roles.first()
    if(args[1] && !isNaN(args[1])){
        role = message.guild.roles.cache.get(args[1])
    }
    let user;
    if(args[0] && isNaN(args[0])) user = message.mentions.users.first()
    if(args[0] && !isNaN(args[0])){
        user = client.users.cache.get(args[0])

        if(!message.guild.members.cache.has(args[0])) return message.reply("User not found")
    }
    if(!user) return message.reply(":x: You must mention a user")
    if(!role) return message.reply(":x: You must mention role")
if(!message.guild.members.cache.get(user.id).roles.cache.has(role.id)) return message.reply(":x:")
    message.guild.members.cache.get(user.id).roles.remove(role.id).catch(e => message.reply(e))
    message.reply("Role has been removed")

//addRole @user @role
}else{
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            //.setTitle('Discord App')
            .setAuthor('**You have not the perm!**')
            //.addFields()
            //.setImage()
            .setTimestamp()
            .setFooter('');

            message.channel.send(newEmbed);
        }
}
    }