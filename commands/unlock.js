const Discord = require("discord.js")
const db = require("quick.db")
module.exports = {
    name: 'unlock',
    description: "This command lock a channel!",
    async execute(message, args, cmd, client, Discord){
      if(message.member.roles.cache.some(r => r.name === "👑Founder")){
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return;

    if(!db.fetch(`lock.${message.channel.id}`)) return message.reply("This channel already unlocked")

    let msg = await message.channel.send("Loading...")

    try {
        db.delete(`lock.${message.channel.id}`)
        message.channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"),{
            SEND_MESSAGES:true,
            ADD_REACTIONS:true
        })
        msg.edit("**Channel has been UNLOCKED**")

    }catch(e){
        message.channel.send(e)
    }
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

exports.help = {
    name:"unlock",
    description:"Empty",
    usage:"embed",
    category:"moderation"
}