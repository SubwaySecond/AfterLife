module.exports = {
    name: 'say',
    description: "This is a say command",
    execute(message, args, cmd, client, Discord){
      if(message.member.roles.cache.some(r => r.name === "Owner👑")){
        const sayMessage = args.join(" ");
        message.delete().catch(err => console.log(err));
        message.channel.send(sayMessage);
}else{
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            //.setTitle('Discord App')
            .setAuthor('**You are not STAFF**')
            //.addFields()
            //.setImage()
            .setTimestamp()
            .setFooter('');

            message.channel.send(newEmbed);
        }
    }
}