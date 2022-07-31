const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb');
const greet = new db.crearDB('greet')
const timer = new db.crearDB('timer')

module.exports = {
  name: "delete-greet", 
  alias: ["eliminar-greet"], 

execute (client, message, args){

  var perms = message.member.hasPermission("MANAGER_CHANNELS")
  if(!perms) return message.channel.send("no tienes permiso!")
  

  
  message.channel.send(`El greet se a eliminado`)



greet.eliminar(`${message.guild.id}`)



  
 }

}