const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb');
const greet = new db.crearDB('greet')
const timer = new db.crearDB('timer')

module.exports = {
  name: "greet", 
  alias: ["setgreet"], 

execute (client, message, args){

  var perms = message.member.hasPermission("MANAGER_CHANNELS")
  if(!perms) return message.channel.send("no tienes permiso!")
  
  const canal =  message.mentions.channels.first()
  if(!canal) return message.channel.send("Debes mencionar un canal")
  
  message.channel.send(`El canal de greet es ${canal}`)



greet.establecer(`${message.guild.id}`, `${canal.id}`)



  
 }

}