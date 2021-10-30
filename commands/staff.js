module.exports = {
  name: "staff",
  description: "application URL",
  execute(message, args, cmd, client, Discord) {
        message.delete().catch(err => console.log(err));
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setDescription('[**STAFF APPLICATION**](https://docs.google.com/forms/d/e/1FAIpQLSe5_gYNyyOsLer89vRf9BMYzmtSArYS7DzNRIKJbeBB1q4I6Q/viewform)')
        .setImage('https://cdn.discordapp.com/attachments/902870663545647105/903618436138147860/ghostface.png')
        .setURL('https://docs.google.com/forms/d/e/1FAIpQLSe5_gYNyyOsLer89vRf9BMYzmtSArYS7DzNRIKJbeBB1q4I6Q/viewform')
        message.channel.send(newEmbed) //so it replys to the `.ping` command
    }
};

