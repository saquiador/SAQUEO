const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const dinero = new db.crearDB('dinero')


module.exports = {
  name: "bal", 
  alias: ["b"], 

async execute (client, message, args){

const user = message.author || message.mentions.members.first()

if(!dinero.tiene(`${user.id}`)){
  dinero.establecer(`${user.id}`, 0)
}

const cantidad = await dinero.obtener(`${user.id}`)

const embed = new Discord.MessageEmbed()

 .setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
 .setTitle("💰BALANCE💰")
 .setDescription(`El usuario **${user}** tiene **${cantidad}** De Dinero 💵`)
 .setThumbnail(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
 .setColor("GREEN")

message.channel.send(embed)
  

 }

}