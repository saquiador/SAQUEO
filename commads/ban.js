const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ban", 
  alias: ["ban-user"], 

execute (client, message, args){

  if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("No tienes permiso")
  
  let user = message.mentions.members.first();
  
  let banReason = args.join(' ').slice(22);
  if(!user) return message.channel.send("menciona a alguien")

  if(user.id === client.user.id) return message.channel.send("No me puedo auto banear")

  if(user === message.author) return message.channel.send("error verifica a quien quieres banear")
  if(message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.channel.send("error verifica a quien quieres banear")
  
  
  if(!banReason) return message.channel.send("Motivo del ban")
  
  user.ban({ reason: banReason})

 }

}