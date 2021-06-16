const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "reroll", 
  alias: ["r"], 

execute (client, message, args){

  var perms = message.member.hasPermission("MANAGE_EMOJIS")
if(!perms) return message.channel.send("no tienes permisos")

let giveaway = client.giveawaysManager.giveaways.find((g) => g.guildID === message.guild.id && g.prize === args.join(' ')) || 

client.giveawaysManager.giveaways.find((g) => g.guildID === message.guild.id && g.messageID === args[0]);

if (!giveaway) return message.channel.send('no mencionaste la id o no hay un sorteo con esa id `'+ args.join(' ') +'`.');

let messageID = args[0]
client.giveawaysManager.reroll(messageID, {
        messages: {
            congrat: '<a:4304_party10000:847679200130367529> El nuevo ganador es : {winners}!felicidades tu premio es **{prize}**!\n{messageURL}',
            error: 'No hay nadie mas'
        }
    }).catch((err) => {
        message.channel.send('no hay un sorteo con esa id' + messageID + ', porfavor revisar');
    });
 }

}