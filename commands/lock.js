const Discord = require("discord.js")
const db = require("quick.db")
module.exports = {
    name: 'lock',
    description: "This command lock a channel!",
    async execute(message, args, cmd, client, Discord){
      if(message.member.roles.cache.some(r => r.name === "👑Founder")){
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return;

    if(db.fetch(`lock.${message.channel.id}`)) return message.reply("This channel already locked")

    let msg = await message.channel.send("Loading...")

    try {
        db.set(`lock.${message.channel.id}`,message.author.id)
        message.channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"),{
            SEND_MESSAGES:false,
            ADD_REACTIONS:false
        })
        msg.edit("**Channel has been LOCKED**")

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

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliase:[]
}