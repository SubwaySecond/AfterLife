module.exports = {
    name: 'ban',
    description: "This command ban a member!",
    execute(message, args, cmd, client, Discord){

        const target = message.mentions.users.first();
        if(message.member.roles.cache.some(r => r.name === "👑Founder")){
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            //.setTitle('Discord App')
            .setAuthor('User has been baned!')
            //.addFields()
            //.setImage()
            .setTimestamp()
            .setFooter('');

            message.channel.send(newEmbed);
        }}else{
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            //.setTitle('Discord App')
            .setAuthor('You can not ban that member!')
            //.addFields()
            //.setImage()
            .setTimestamp()
            .setFooter('');

            message.channel.send(newEmbed);
        }
  }
} 