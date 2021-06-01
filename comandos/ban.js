const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ban", 
  alias: ["banear"], 

execute (client, message, args){

  if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("No tienes permiso")
  
  let user = message.mentions.members.first();
  
  let banReason = args.join(' ').slice(22);
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("No tienes permiso")
  
  if(!user) return message.channel.send("menciona a alguien")
  if(message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.channel.send("No puedes banear a alguiende igaul o mas poder que tu")
  
  if(user === message.author) return message.channel.send("No te puedes banear a ti mismo")
  if(!banReason) return message.channel.send("Escribe una razon")
  
  user.ban({ reason: banReason})

 }

}