const express = require('express');
const app = express();
const port = 4500;

app.get('/', (req, res) => res.send('Legendary RolePlay Is Online But Check The Monitor'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

const Discord = require('discord.js');


const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = '!';
 
const fs = require('fs');

const usersMap = new Map();

const { Collection } = require('discord.js')
const voiceCollection = new Collection();


client.commands = new Discord.Collection();

//Welcome System
client.on('guildMemberAdd', (member) => {
  const user = member.user
  const channelID = member.guild.channels.cache.find(ch => ch.name === 'βwelcome')
  const guild = member.guild.id 
  const memberEmbed = new Discord.MessageEmbed()
    .setTitle('`Welcome to the server`')
    .addField(`${user.tag}` ,`\u200B`)
    .setColor('#2F3136')
      const role = member.guild.roles.cache.find(role => role.name === 'CivilianπΊ')
      member.roles.add(role)
      channelID.send(memberEmbed)
  })
client.on('guildMemberRemove', (member) => {
  const monitorID = member.guild.channels.cache.find(ch => ch.name === 'πβππΌπΆπ»π²-ππ²π³π-ππΌπ΄π')
  const guild = member.guild.id 
  const memberEmbed = new Discord.MessageEmbed()
    .setTitle(`Goodby`)
    .addField(`${member.user.tag}` ,'\u200B')
    .setColor('#2F3136')
      monitorID.send(memberEmbed)
  })

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

 
    client.commands.set(command.name, command);
}

client.on("message", async message =>{
    if(message.author.bot) return;
//Twitter
  if(message.channel.id === '896391696252817458') { 
        if(!message.attachments.first()){
            let embed = new Discord.MessageEmbed()
            .setDescription("**" + message.content + "**")
            .setFooter("Twitter", "https://media.discordapp.net/attachments/761592302916993055/867813888727842866/qZSjX5QH_400x400.jpg")
            .setTimestamp()
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("#00dadd")
            message.channel.send(embed)
            message.delete()
        }
        else if(!message.content){
            let embed2 = new Discord.MessageEmbed()
            .setFooter("Twitter", "https://media.discordapp.net/attachments/761592302916993055/867813888727842866/qZSjX5QH_400x400.jpg")
            .setTimestamp()
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("#00dadd")
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed2)
            message.delete()
        }
        else if(message.content, message.attachments.first()){
            let embed3 = new Discord.MessageEmbed()
            .setFooter("Twitter", "https://media.discordapp.net/attachments/761592302916993055/867813888727842866/qZSjX5QH_400x400.jpg")
            .setTimestamp()
            .setDescription("**" + message.content + "**")
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("#00dadd")
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed3)
            message.delete()
        }
    }else{
    ///Instagram
        if(message.channel.id === '896391647540178975') { // instagram
        if(!message.attachments.first()){
            let embed = new Discord.MessageEmbed()
            .setDescription("**" + message.content + "**")
            .setFooter("Instagram", "https://media.discordapp.net/attachments/541685166364557340/733841462537486427/instagram.png")
            .setTimestamp()
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("#ffffff")
            message.channel.send(embed)
            message.delete()
        }
        else if(!message.content){
            let embed2 = new Discord.MessageEmbed()
            .setFooter("Instagram", "https://media.discordapp.net/attachments/541685166364557340/733841462537486427/instagram.png")
            .setTimestamp()
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("#ffffff")
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed2)
            message.delete()
        }
        else if(message.content, message.attachments.first()){
            let embed3 = new Discord.MessageEmbed()
            .setFooter("Instagram", "https://media.discordapp.net/attachments/541685166364557340/733841462537486427/instagram.png")
            .setTimestamp()
            .setDescription("**" + message.content + "**")
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("#ffffff")
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed3)
            message.delete()
        }
    }else{
//Yellowpage
        if(message.channel.id === '896391613671170058') {
        if(!message.attachments.first()){
            let embed = new Discord.MessageEmbed()
            .setDescription("**" + message.content + "**")
            .setFooter("Yellowpages","https://media.discordapp.net/attachments/761592302916993055/867815902866833478/Yellowpage.jpg")
            .setTimestamp()
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("#c3d400")
            message.channel.send(embed)
            message.delete()
        }
        else if(!message.content){
            let embed2 = new Discord.MessageEmbed()
            .setFooter("Yellowpages","https://media.discordapp.net/attachments/761592302916993055/867815902866833478/Yellowpage.jpg")
            .setTimestamp()
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("#c3d400")
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed2)
            message.delete()
        }
        else if(message.content, message.attachments.first()){
            let embed3 = new Discord.MessageEmbed()
            .setFooter("Yellowpages","https://media.discordapp.net/attachments/761592302916993055/867815902866833478/Yellowpage.jpg")
            .setTimestamp()
            .setDescription("**" + message.content + "**")
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("#c3d400")
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed3)
            message.delete()
        }
    }else{
      
//DarkChat
        if(message.channel.id === '896391794080772186') {
        if(!message.attachments.first()){
            let embed = new Discord.MessageEmbed()
            .setDescription("**" + message.content + "**")
            .setFooter("Anonymus", "https://media.discordapp.net/attachments/761592302916993055/867811453091184640/1ux8fx.jpg")
            .setTimestamp()
            //.setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("#000000")
            message.channel.send(embed)
            message.delete()
            var channel = message.guild.channels.cache.find(c => c.name === 'π₯darkchat-logs');
            var log = new Discord.MessageEmbed()
            .setDescription("**" + message.content + "**")
            .setFooter("Anonymus", "https://media.discordapp.net/attachments/761592302916993055/867811453091184640/1ux8fx.jpg")
            .setTimestamp()
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("#000000")
            channel.send(log)
        }
        else if(!message.content){
            let embed2 = new Discord.MessageEmbed()
            .setFooter("Anonymus", "https://media.discordapp.net/attachments/761592302916993055/867811453091184640/1ux8fx.jpg")
            .setTimestamp()
            //. setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("#000000")
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed2)
            message.delete()
            var channel = message.guild.channels.cache.find(c => c.name === 'π₯darkchat-logs');
            var log2 = new Discord.MessageEmbed()
            .setFooter("Anonymus", "https://media.discordapp.net/attachments/761592302916993055/867811453091184640/1ux8fx.jpg")
            .setTimestamp()
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("#000000")
            .setImage(message.attachments.first().proxyURL)
            channel.send(log2)
        }
        else if(message.content, message.attachments.first()){
            let embed3 = new Discord.MessageEmbed()
            .setFooter("Anonymus", "https://media.discordapp.net/attachments/761592302916993055/867811453091184640/1ux8fx.jpg")
            .setTimestamp()
            .setDescription("**" + message.content + "**")
            //.setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("#000000")
            .setImage(message.attachments.first().proxyURL)
            message.channel.send(embed3)
            message.delete()
            var channel = message.guild.channels.cache.find(c => c.name === 'π₯darkchat-logs');
            var log3 = new Discord.MessageEmbed()
            .setFooter("Anonymus", "https://media.discordapp.net/attachments/761592302916993055/867811453091184640/1ux8fx.jpg")
            .setTimestamp()
            .setDescription("**" + message.content + "**")
            .setAuthor("@" + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("#000000")
            .setImage(message.attachments.first().proxyURL)
            channel.send(log3)
        }
    
        }
    }
    }
    }
});

//Waiting For Support
client.on("voiceStateUpdate", async (oldState, newState) => {
  const user = await client.users.fetch(newState.id);
  const member = newState.guild.member(user);
  if (!oldState.channel && newState.channel.id === "896386580204388362") {
  const channel = await newState.guild.channels.create('π Waiting For Support', {
  type: "voice",
  parent: newState.channel.parent,
  });
//Notification
    member.voice.setChannel(channel);
    member.guild.channels.cache.get('896412961181155328').send(`**<@&894569668151484504> ΟΞ±ΟΞ±ΞΊΞ±Ξ»Ξ΅Ξ―ΟΟΞ΅ Ξ½Ξ± Ξ΅ΞΎΟΟΞ·ΟΞ΅ΟΞ?ΟΞ΅ΟΞ΅ ΟΞΏΞ½ <@${member.id}> ΟΞΏ ΟΟΞ½ΟΞΏΞΌΟΟΞ΅ΟΞΏ Ξ΄ΟΞ½Ξ±ΟΟΞ½ ΟΟΞΏ Support!**`)
    voiceCollection.set(user.id, channel.id);
      } else if(!newState.channel) {
      if(oldState.channelID === voiceCollection.get(newState.id)) return oldState.channel.delete();
      }       
});

//Waiting For Donate
client.on("voiceStateUpdate", async (oldState, newState) => {
  const user = await client.users.fetch(newState.id);
  const member = newState.guild.member(user);
  if (!oldState.channel && newState.channel.id === "903262453188681778") {
  const channel = await newState.guild.channels.create('πΈDonate Room', {
  type: "voice",
  parent: newState.channel.parent,
  });
//Notification
    member.voice.setChannel(channel);
    member.guild.channels.cache.get('903989148254347304').send(`**@everyone ΟΞ±ΟΞ±ΞΊΞ±Ξ»Ξ΅Ξ―ΟΟΞ΅ Ξ½Ξ± Ξ΅ΞΎΟΟΞ·ΟΞ΅ΟΞ?ΟΞ΅ΟΞ΅ ΟΞΏΞ½ <@${member.id}> ΟΞΏ ΟΟΞ½ΟΞΏΞΌΟΟΞ΅ΟΞΏ Ξ΄ΟΞ½Ξ±ΟΟΞ½ ΟΟΞΏ Donate!**`)
    voiceCollection.set(user.id, channel.id);
      } else if(!newState.channel) {
      if(oldState.channelID === voiceCollection.get(newState.id)) return oldState.channel.delete();
      }       
});

//Waiting For Owner
client.on("voiceStateUpdate", async (oldState, newState) => {
  const user = await client.users.fetch(newState.id);
  const member = newState.guild.member(user);
  if (!oldState.channel && newState.channel.id === "883088550843793408") {
  const channel = await newState.guild.channels.create('πβπ’ππ»π²πΏ', {
  type: "voice",
  parent: newState.channel.parent,
  });
//Notification
    member.voice.setChannel(channel);
    member.guild.channels.cache.get('889904377891024936').send(`**<@&889904377891024936> ΟΞ±ΟΞ±ΞΊΞ±Ξ»Ξ΅Ξ―ΟΟΞ΅ Ξ½Ξ± Ξ΅ΞΎΟΟΞ·ΟΞ΅ΟΞ?ΟΞ΅ΟΞ΅ ΟΞΏΞ½ <@${member.id}> ΟΞΏ ΟΟΞ½ΟΞΏΞΌΟΟΞ΅ΟΞΏ Ξ΄ΟΞ½Ξ±ΟΟΞ½ ΟΟΞΏ Owner**`)
    voiceCollection.set(user.id, channel.id);
      } else if(!newState.channel) {
      if(oldState.channelID === voiceCollection.get(newState.id)) return oldState.channel.delete();
      }       
});

//Waiting For Whitelist
client.on("voiceStateUpdate", async (oldState, newState) => {
  const user = await client.users.fetch(newState.id);
  const member = newState.guild.member(user);
  if (!oldState.channel && newState.channel.id === "889904377891024936") {
  const channel = await newState.guild.channels.create('πβπͺπ΅πΆππ²πΉπΆππ', {
  type: "voice",
  parent: newState.channel.parent,
  });
//Notification
    member.voice.setChannel(channel);
    member.guild.channels.cache.get('889904377891024936').send(`**<@&838391968009945088> ΟΞ±ΟΞ±ΞΊΞ±Ξ»Ξ΅Ξ―ΟΟΞ΅ Ξ½Ξ± Ξ΅ΞΎΟΟΞ·ΟΞ΅ΟΞ?ΟΞ΅ΟΞ΅ ΟΞΏΞ½ <@${member.id}> ΟΞΏ ΟΟΞ½ΟΞΏΞΌΟΟΞ΅ΟΞΏ Ξ΄ΟΞ½Ξ±ΟΟΞ½ ΟΟΞΏ Support!**`)
    voiceCollection.set(user.id, channel.id);
      } else if(!newState.channel) {
      if(oldState.channelID === voiceCollection.get(newState.id)) return oldState.channel.delete();
      }       
});

//Waiting For Interview (Police)
client.on("voiceStateUpdate", async (oldState, newState) => {
  const user = await client.users.fetch(newState.id);
  const member = newState.guild.member(user);
  if (!oldState.channel && newState.channel.id === "896494855767875584") {
  const channel = await newState.guild.channels.create('π?ππ»ππ²πΏππΆπ²π', {
  type: "voice",
  parent: newState.channel.parent,
  });
//Notification
    member.voice.setChannel(channel);
    member.guild.channels.cache.get('896494739568885800').send(`**<@&873264446020137051> , <@&861731628274548740> ΟΞ±ΟΞ±ΞΊΞ±Ξ»Ξ΅Ξ―ΟΟΞ΅ Ξ½Ξ± Ξ΅ΞΎΟΟΞ·ΟΞ΅ΟΞ?ΟΞ΅ΟΞ΅ ΟΞΏΞ½ <@${member.id}> ΟΞΏ ΟΟΞ½ΟΞΏΞΌΟΟΞ΅ΟΞΏ Ξ΄ΟΞ½Ξ±ΟΟΞ½ ΟΟΞΏ ππ»ππ²πΏππΆπ²π!**`)
    voiceCollection.set(user.id, channel.id);
      } else if(!newState.channel) {
      if(oldState.channelID === voiceCollection.get(newState.id)) return oldState.channel.delete();
      }       
});

//Waiting For Interview (staff)
client.on("voiceStateUpdate", async (oldState, newState) => {
  const user = await client.users.fetch(newState.id);
  const member = newState.guild.member(user);
  if (!oldState.channel && newState.channel.id === "896392060410691634") {
  const channel = await newState.guild.channels.create('π°βππ»ππ²πΏππΆπ²π', {
  type: "voice",
  parent: newState.channel.parent,
  });
//Notification
    member.voice.setChannel(channel);
    member.guild.channels.cache.get('896490461584322640').send(`**<@&861731628312035347> , <@&861731628312035346> ,
<@&861731628312035345>
ΟΞ±ΟΞ±ΞΊΞ±Ξ»Ξ΅Ξ―ΟΟΞ΅ Ξ½Ξ± Ξ΅ΞΎΟΟΞ·ΟΞ΅ΟΞ?ΟΞ΅ΟΞ΅ ΟΞΏΞ½ <@${member.id}> ΟΞΏ ΟΟΞ½ΟΞΏΞΌΟΟΞ΅ΟΞΏ Ξ΄ΟΞ½Ξ±ΟΟΞ½ ΟΟΞΏ ππ»ππ²πΏππΆπ²π!**`)
    voiceCollection.set(user.id, channel.id);
      } else if(!newState.channel) {
      if(oldState.channelID === voiceCollection.get(newState.id)) return oldState.channel.delete();
      }       
});

//Waiting For Interview (EKAB)
client.on("voiceStateUpdate", async (oldState, newState) => {
  const user = await client.users.fetch(newState.id);
  const member = newState.guild.member(user);
  if (!oldState.channel && newState.channel.id === "889904377891024936") {
  const channel = await newState.guild.channels.create('πβππ»ππ²πΏππΆπ²π', {
  type: "voice",
  parent: newState.channel.parent,
  });
//Notification
    member.voice.setChannel(channel);
    member.guild.channels.cache.get('889904377891024936').send(`**<@&889904377891024936> , <@&838474420666236968> ΟΞ±ΟΞ±ΞΊΞ±Ξ»Ξ΅Ξ―ΟΟΞ΅ Ξ½Ξ± Ξ΅ΞΎΟΟΞ·ΟΞ΅ΟΞ?ΟΞ΅ΟΞ΅ ΟΞΏΞ½ <@${member.id}> ΟΞΏ ΟΟΞ½ΟΞΏΞΌΟΟΞ΅ΟΞΏ Ξ΄ΟΞ½Ξ±ΟΟΞ½ ΟΟΞΏ ππ»ππ²πΏππΆπ²π!**`)
    voiceCollection.set(user.id, channel.id);
      } else if(!newState.channel) {
      if(oldState.channelID === voiceCollection.get(newState.id)) return oldState.channel.delete();
      }       
});
//Suggestion System
client.on("message", async message =>{
  if(message.author.bot) return;
  if(message.channel.id === '903989713625567312'){
  const newEmbed = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.displayAvatarURL())
  .setDescription(`${message.content}`)
  .setColor('#F60000')
  .setTimestamp() 
    message.channel.send(newEmbed).then((msg) =>{
    msg.react('β');
    msg.react('β');
    message.delete();
    });
  }
});
//Suggestion staff System
client.on("message", async message =>{
  if(message.author.bot) return;
  if(message.channel.id === '896420461326503946'){
  const newEmbed = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.displayAvatarURL())
  .setDescription(`${message.content}`)
  .setColor('#F60000')
  .setTimestamp() 
    message.channel.send(newEmbed).then((msg) =>{
    msg.react('β');
    msg.react('β');
    message.delete();
    });
  }
});
//comliment System
client.on("message", async message =>{
  if(message.author.bot) return;
  if(message.channel.id === '896419702459498496'){
  const newEmbed = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.displayAvatarURL())
  .setDescription(`${message.content}`)
  .setColor('#F60000')
  .setTimestamp() 
    message.channel.send(newEmbed).then((msg) =>{
    msg.react('β');
    msg.react('β');
    message.delete();
    });
  }
});
//poll System
client.on("message", async message =>{
  if(message.author.bot) return;
  if(message.channel.id === '896390798600458280'){
  const newEmbed = new Discord.MessageEmbed()
  .setAuthor(message.author.tag, message.author.displayAvatarURL())
  .setDescription(`${message.content}`)
  .setColor('#F60000')
  .setTimestamp() 
    message.channel.send(newEmbed).then((msg) =>{
    msg.react('β');
    msg.react('β');
    message.delete();
    });
  }
});
//Report System
client.on("message", async message =>{
//Staff Report
  if(message.author.bot) return;
  if(message.channel.id === '895590386779717642'){
  message.delete();
    var channel = message.guild.channels.cache.find(c => c.name === 'πΊreport-logs');
    var log = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setColor('#E71E28')
    .setDescription(`${message.content}`)
    .setTimestamp()
    .setFooter('**Staff Report Logs**');
    channel.send(log);
      }else{
//Player Report
        if(message.author.bot) return;
        if(message.channel.id === '895590522310230046'){
        message.delete();
          var channel = message.guild.channels.cache.find(c => c.name === 'πΊreport-logs');
          var log = new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.displayAvatarURL())
          .setColor('#E71E28')
        .setDescription(`${message.content}`)
        .setTimestamp()
        .setFooter('**Player Report Logs**');
        channel.send(log);
        }else{
//Bug Report
          if(message.author.bot) return;
          if(message.channel.id === '895590605084844063'){
          message.delete();
            var channel = message.guild.channels.cache.find(c => c.name === 'πΊreport-logs');
            var log = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setColor('#E71E28')
            .setDescription(`${message.content}`)
            .setTimestamp()
            .setFooter('**Bug Report Logs**');
            channel.send(log);
      }
    }
  }
});
//Loggs System
client.on("message", async message =>{
//Chat Logs
  if(message.author.bot) return;
  if(message.channel.id === '890335270367526916'){
    var channel = message.guild.channels.cache.find(c => c.name === 'γπΌγgeneral-logs');
    var log = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setColor('#0496DF')
    .setDescription(`${message.content}`)
    .setTimestamp()
    .setFooter('Chat Logs');
    channel.send(log);
      }else{
  if(message.author.bot) return;
  if(message.channel.id === '891677789982429244'){
    var channel = message.guild.channels.cache.find(c => c.name === 'γπΌγgeneral-logs');
    var log = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL())
    .setColor('#0496DF')
    .setDescription(`${message.content}`)
    .setTimestamp()
    .setFooter('Command Logs');
    channel.send(log);
      }
      }
});

client.on("messageReactionAdd", (reaction, user) => {
    if (user.bot) {
        return;
    }
    const { message } = reaction
    
    if (reaction.emoji.name === "π«") {
        reaction.users.remove(user.id)
        message.guild.channels.create(`${user.tag}-ticket`, {
            permissionOverwrites: [
                {
                    deny: "VIEW_CHANNEL",
                    id: message.guild.id
                },
                {
                    allow: ["VIEW_CHANNEL", "SEND_MESSAGES", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "ADD_REACTIONS"],
                    id: user.id
                }
            ]
        })
        .then(ch => {
            const e = new Discord.MessageEmbed()
            .setTitle("`π«Support ticket`")
            .setColor("#2F3136")
            .setDescription("```Ξ Ξ±ΟΞ±ΞΊΞ±Ξ»Ο ΟΞ΅ΟΞΉΞΌΞ­Ξ½Ξ΅ΟΞ΅ ΞΌΞ­ΟΟΞΉ ΞΊΞ¬ΟΞΏΞΉΞΏΟ Ξ±ΟΟ ΟΞ·Ξ½ ΞΏΞΌΞ¬Ξ΄Ξ±  ΞΌΞ±Ο Ξ½Ξ± ΟΞ±Ο Ξ΅ΞΎΟΟΞ·ΟΞ΅ΟΞ?ΟΞ΅ΞΉ. ΞΞΉΞ± Ξ½Ξ± ΞΊΞ»Ξ΅Ξ―ΟΞ΅ΟΞ΅ ΟΞΏ ticket ΞΊΞ¬Ξ½ΟΞ΅ react ΞΌΞ΅ ΟΞΏ emoji π!```")
            //.setFooter("To close the ticket press the reaction below")

            ch.send(e)
            .then(msg => {
                msg.react("π")
            })
        })
    }
    else if (reaction.emoji.name === "π") {
        if (message.channel.name.endsWith("-ticket") || message.channel.name.endsWith("-mp")) {
            message.channel.delete()
        }
        else {
            return;
        
        }
    }
})




client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
  require(`./handlers/${handler}`)(client, Discord);
})


client.login('OTAzOTg3ODk0Mjc0OTEyMjU2.YX0-VQ.DymULPBNTpw4C3LKlAru1-sLB3c');
