const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "say", 
  alias: ["decir"], 

execute (client, message, args){

var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("no tienes permiso para esta comando")
  
  let texto = args.join('')
  if(!texto) return message.channel.send("Escribe algo")
  
  message.channel.send(texto)

 }

}