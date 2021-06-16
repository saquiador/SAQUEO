const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "end", 
  alias: ["e"], 

execute (client, message, args){

  
  var perms = message.member.hasPermission("MANAGE_EMOJIS")
if(!perms) return message.channel.send("no tienes permisos")

  let messageID = args[0]
client.giveawaysManager.end(messageID, {
        messages: {
            congrat: '<a:4304_party10000:847679200130367529> El ganador es {winners} !felicidades tu premio es {prize}!\n{messageURL}',
            error: 'Nadie se unio',
            noWinner: 'Nadie se unio'
        }
        }).catch((err) => {
            message.channel.send('no hay un sorteo con esa id' + messageID + ', porfavor revisar');
        });




 }

}