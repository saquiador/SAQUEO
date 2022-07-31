const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "send", 
  alias: ["enviar"], 

execute (client, message, args){
 
 var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("no tienes permiso para esta comando") 
  let canal = message.mentions.channels.first()
  if(!canal) return message.channel.send("Menciona un canal")
  
  let texto = args.slice(1).join(" ")
  if(!texto) return message.channel.send("Escribe algo")
  canal.send(texto)

 }

}