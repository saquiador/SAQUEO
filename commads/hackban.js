const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ban-ip", 
  alias: ["ban-ip"], 

async execute (client, message, args){
  
  var perms = message.member.hasPermission("BAN_MEMBERS")
  if(!perms) return message.channel.send("No tienes permiso para este comando!")


  
  const id = args.join(` `)
  if(!id) return message.channel.send("Debes poner la ID")
  const member = await client.users.fetch(id)
  message.guild.members.ban(member.id)
  
  
  message.channel.send(`El usuario **${member.username}** fue baneado correctamente`)

  
  
  

 }

}