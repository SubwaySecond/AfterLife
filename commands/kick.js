module.exports = {
    name: 'kick',
    description: "This command kick a member!",
    execute(message, args, cmd, client, Discord){

        const target = message.mentions.users.first();
        if(message.member.roles.cache.some(r => r.name === "👑Founder")){
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            //.setTitle('Discord App')
            .setAuthor('User has been kicked!')
            //.addFields()
            //.setImage()
            .setTimestamp()
            .setFooter('');

            message.channel.send(newEmbed);
        }}else{
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            //.setTitle('Discord App')
            .setAuthor('You can not kick that member!')
            //.addFields()
            //.setImage()
            .setTimestamp()
            .setFooter('');

            message.channel.send(newEmbed);
        }
    }
  }
