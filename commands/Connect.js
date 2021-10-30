module.exports = {
    name: 'connect',
    description: "how to connect",
    execute (message, args, cmd, client, Discord){
    const newEmbed = new Discord.MessageEmbed()
            .setColor('#1ebecc')
            .setTitle('')
            ///.setAuthor('\u200B')
            .addFields(
                { name: 'How to connect', value: 'Καλώςηρθατε στον AfterLife RolePlay! Αν θέλεις βοήθεια και δεν ξερεις πως να μπεις στον server κανε ticket  για να σε βοηθήσει το πρωσωπικό του server!!!'}
                )
            //.setImage()
            //.setTimestamp()
            //.setFooter('');

            message.channel.send(newEmbed);
     }
}