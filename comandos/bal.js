const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const dinero = new db.crearDB('dinero')


module.exports = {
  name: "bal", 
  alias: [""], 

async execute (client, message, args){

const user = message.author || message.mentions.members.first()

if(!dinero.tiene(`${user.id}`)){
  dinero.establecer(`${user.id}`, 0)
}

const cantidad = await dinero.obtener(`${user.id}`)

const embed = new Discord.MessageEmbed()

 .setTitle("💰BALANCE💰")
 .setDescription(`El usuario **${user}** tiene **${cantidad}** De Dinero 💵`)
 .setColor("GREEN")

message.channel.send(embed)
  

 }

}