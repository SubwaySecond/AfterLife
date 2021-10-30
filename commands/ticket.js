module.exports = {
    name: 'ticket',
    description: "Create ticket",
    execute (message, args, cmd, client, Discord){
    const newEmbed = new Discord.MessageEmbed()
            .setColor('#2F3136')
            .setTitle('`🎫Create Ticket`')
            .setDescription("```Για να ενεργοποιήσετε κάποιο ticket για την εξυπηρέτηση σας θα σας παρακαλούσαμε να κάνετε reaction παρακάτω ώστε να σας ανοίξει ένα ticket.```")
            message.channel.send(newEmbed).then((msg) =>{
            msg.react('🎫');
            message.delete()
     });
     }
}