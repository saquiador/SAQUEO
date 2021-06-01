const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "kick", 
  alias: ["expulzar"], 

execute (client, message, args){

var perms = message.member.hasPermission("KICK_MEMBERS")
if(!perms) return message.channel.send("No tienes permiso para este comando!")


if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("no tienes suficientes permiso!")


const user = message.mentions.members.first()
if(!user) return message.channel.send("Debes mencionar a alguien")

if(user === message.author) return message.channel.send("No te puedes expulzar a ti Mismo")

  var razon = args.slice(1).join(' ')
  if(!razon){
    razon = 'No especifico'
  }
  
  message.guild.member(user).kick(razon);
  
  
const embed = new Discord.MessageEmbed()

 .setTitle("🚫Kick")
 .setDescription(`El usuario **${user}** Fue expulzado por motivos de **${razon}**\nModerador: **${message.author}**`)
 .setColor("RED")
  
  message.channel.send(embed)
  

 }

}