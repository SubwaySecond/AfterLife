module.exports = {
    name: 'clear',
    description: "clear message",
    async execute(message, args, cmd, client, Discord){
      if(message.member.roles.cache.some(r => r.name === "👑Founder")){
      if(!args[0]) return message.reply("please enter the amount of messages that you want to clear!");
      if(isNaN(args[0])) return message.reply("please enter a real number!");

      if(args[0] > 100) return message.reply("You can not delete more than 100 messages!");
      if(args[0] < 1) return message.reply("You most delete atleast one message!");

      await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
        message.channel.bulkDelete(messages);
    });

      }else {
        if(!args[0]) return message.reply("You are not admin!");
        if(isNaN(args[0])) return message.reply("You are not admin!");

        if(args[0] > 100) return message.reply("You are not admin!");
        if(args[0] < 1) return message.reply("You are not admin!");
        if({limit: args[0]}) return message.reply("You are not admin!");

        };
      }
  }