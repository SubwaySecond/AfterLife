module.exports = {
    name: 'modcommands',
    description: "mod commands",
    execute (message, args, cmd, client, Discord){
    const newEmbed = new Discord.MessageEmbed()
            .setColor('#1ebecc')
            .setTitle('Moderator Command List')
            ///.setAuthor('\u200B')
            .addFields(
                { name: '!addrole', value: 'Με αυτό το command δίνεις έναν ρόλο σε κάποιον (!addrole @αυτον που θες @τον ρόλο που θες).'},
                { name: '!removerole', value: 'Με αυτό το command αφαιρείς έναν ρόλο από κάποιον (!removerole @αυτόν που θες @τον ρόλο που θες).'},
                { name: '!ban', value: 'Με αυτό το command κάνεις κάποιον ban (!ban @αυτόν που θες).'},
                { name: '!kick', value: 'Με αυτό το command κάνεις κάποιον kick (!kick @αυτόν που θες).'},
                { name: '!clear', value: 'Με αυτό το command διαγράφεις πολλά μηνύματα από ενα κανάλι. Προσοχή δεν μπορείς να διαγράψεις μηνύματα που έχουν σταλεί πάνω από 7 μέρες (!clear 1-100).'},
                { name: '!warn', value: 'Με αυτό το command κάνεις σε κάποιον προειδοποίηση αν παραβιάσει κάποιον κανόνα(!warn @το άτομο που θες)).'},
                { name: '!warns', value: 'Με αυτό το command βλέπεις τις προειδοποιήσεις που έχουν γίνει σε κάποιον (!warns @το άτομο που θες).'},
                { name: '!clearwarns', value: 'Με αυτό το command διαγράφεις όλες τις προειδοποιήσεις από κάποιον (!clearwarns @το άτομο που θες).'},
                { name: '!lock', value: 'Με αυτό το command κλειδώνεις ένα κανάλι για να μην μπορούν να γράφουν τα μέλη του server (!lock).'},
                { name: '!unlock', value: 'Με αυτό το command ξεκλειδώνεις ένα κανάλι (!unlock).'},
                { name: '!mute', value: 'Με αυτό το command κάνεις κάποιον mute (!mure @αυτόν που θέλεις)'},
                { name: '!unmute', value: 'Με αυτό το command κάνεις κάποιον unmute (!unmute @το άτομο που θες).'},
            )
            //.setImage()
            //.setTimestamp()
            //.setFooter('');

            message.channel.send(newEmbed);
     }
}