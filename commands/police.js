module.exports = {
  name: "police",
  description: "application URL",
  execute(message, args, cmd, client, Discord) {
        message.delete().catch(err => console.log(err));
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#0019fa')
        .setDescription('[**POLICE APPLICATION**](https://docs.google.com/forms/d/e/1FAIpQLSftZ8XNopaZ9DklIhwUT0DXrDmvOphbMnxPTDkwFMMyq6leMg/viewform)')
        .setImage('https://www.civilprotection.gr/sites/default/gscp_uploads/elas_0.png')
        .setURL('https://docs.google.com/forms/d/e/1FAIpQLSftZ8XNopaZ9DklIhwUT0DXrDmvOphbMnxPTDkwFMMyq6leMg/viewform')
        message.channel.send(newEmbed) //so it replys to the `.ping` command
    }
};

