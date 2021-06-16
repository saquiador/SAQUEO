const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "nuke", 
  alias: [""], 

execute (client, message, args){

var perms = message.member.hasPermission("MANAGE_MESSAGES")
  if(!perms) return message.channel.send("No tienes permiso para este comando")
  
 let link = "https://media.discordapp.net/attachments/850126204035792926/850126558093770772/explosion-icegif-5.gif"

 const nuke = new Discord.MessageAttachment(link, "nuke.gif")

 var posicion = message.channel.position

 message.channel.clone().then((canal) => {
   message.channel.delete()

   canal.setPosition(posicion)

   canal.send("Nuke! ", nuke)
 })

  

 }

}