const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');


module.exports = {
  name: "embed", 
  alias: ["enbed"], 

async execute (client, message, args){

  var perms = message.member.hasPermission("MANAGE_MESSAGES")
  if(!perms) return message.channel.send("no tienes permiso para esta comando")

   let canal = message.mentions.channels.first()
  if(!canal) return message.channel.send("Menciona un canal")

 

  const color = args[1]
  if(!color) return message.channel.send("color?")

const imagen = args[2]
  if(!imagen) return message.channel.send("imagen")
  


  
  
    const texto = args.slice(3).join(' ');
  if(!texto) return message.channel.send("Escribe algo")

   
  
  const embed = new Discord.MessageEmbed()
  .setDescription(`${texto}`)
  .setColor(`${color}`)
 .setImage(`${imagen}`)
 .setThumbnail(message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))

   canal.send(embed)
   message.channel.send("mesaje enviado")
  

 }

}