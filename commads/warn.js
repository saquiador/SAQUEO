const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const warns = new db.crearDB('warns')

module.exports = {
  name: "warn", 
  alias: ["avisar"], 

execute (client, message, args){

var perms = message.member.hasPermission("MANAGE_MESSAGES")
  if(!perms) return message.channel.send("No tienes permiso para este comando")


let persona = message.mentions.members.first()
if(!persona) return message.channel.send("Debes escribir a alguien")

 if(persona.id === client.user.id) return message.channel.send("No puedes warnear me , usa otro bot")



if(persona === message.author) return message.channel.send("No te puedes banear a ti mismo")

var razon = args.slice(1).join(" ")
if(!razon){ 
  razon = 'No especificado'
}
  

if(!warns.tiene(`${message.guild.id}.${persona.id}`))
warns.establecer(`${message.guild.id}.${persona.id}`, 0)


warns.sumar(`${message.guild.id}.${persona.id}`, 1)

const embed = new Discord.MessageEmbed()

 .setTitle("🚫warn🚫")
 .setDescription(`El moderador ${message.author} alvirtio a **${persona}** por **${razon}**`)
 .setColor("RED")


message.channel.send(embed)


persona.send(`Te han avisado en el servidor ${message.guild.name} por **${razon}**`)

 }

}