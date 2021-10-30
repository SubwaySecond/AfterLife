module.exports = {
  name: "ekab",
  description: "application URL",
  execute(message, args, cmd, client, Discord) {
        message.delete().catch(err => console.log(err));
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setDescription('[**ΕΚΑΒ APPLICATION**](https://docs.google.com/forms/d/e/1FAIpQLSf_fcYg4eljzzljbeyFRiz65Q3FxrGTfWWnHQPL6cNpeIWWgQ/viewform)')
        .setImage('https://4.bp.blogspot.com/-8HEpXPqyPoQ/WrtLI-S6DcI/AAAAAAAAAO8/SvQdQgdBzNUhhogDYgDhUnjtcdycOZ5lgCLcBGAs/s1600/ekab-logo.png')
        .setURL('https://docs.google.com/forms/d/e/1FAIpQLSf_fcYg4eljzzljbeyFRiz65Q3FxrGTfWWnHQPL6cNpeIWWgQ/viewform')
        message.channel.send(newEmbed) //so it replys to the `.ping` command
    }
};

""