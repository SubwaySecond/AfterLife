module.exports = {
    name: 'say2',
    description: "This is a say command",
    execute(message, args, cmd, client, Discord){
        const sayMessage = args.join(" ");
        message.delete().catch(err => console.log(err));
        let messageArgs = args.join(' ');
        const newEmbed = new Discord.MessageEmbed()
          .setColor('#ff0000')
          //.setAuthor('AfterLife Roleplay')
          .setDescription(messageArgs);
          message.channel.send(newEmbed);
      }
    }