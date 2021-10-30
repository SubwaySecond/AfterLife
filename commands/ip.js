module.exports = {
    name: 'ip',
    description: "ip server",
    execute (message, args, cmd, client, Discord){
    const newEmbed = new Discord.MessageEmbed()
            .setColor('#1ebecc')
            .setTitle('')
            ///.setAuthor('\u200B')
            .addFields(
                { name: 'Ip server', value: 'soon...'},
                )
            //.setImage()
            //.setTimestamp()
            //.setFooter('');

            message.channel.send(newEmbed);
     }
}