const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const dinero = new db.crearDB('dinero')

let cooldown = new Set();

module.exports = {
  name: "work", 
  alias: ["trabajo"], 

execute (client, message, args){

if(!cooldown.has(message.author.id)){
  message.channel.send(`${message.author}, debes esperar 1m para usar este comando de nuevo`)
  
  return;
}

cooldown.add(message.author.id);


setTimeout(() => {
  cooldown.delete(message.author.id);
},100000);





  const user = message.author;
  
  
  
  if(!dinero.tiene(`${user.id}`))
dinero.establecer(`${user.id}`, 0)

let random = Math.floor(Math.random() * 175) + 100

let trabajo = ["policia", "profesor", "enfermer@", "banquero"]
let randomtrabajo = trabajo[Math.floor(Math.random() * trabajo.length)]

dinero.sumar(`${user.id}`, random)

const embed = new Discord.MessageEmbed()

 .setTitle("💰WORK💰")
 .setDescription(`El usuario **${user}** a trabajado de  **${randomtrabajo}** y a ganado **${random}**💵`)
 .setColor("BLUE")

message.channel.send(embed)

 }

}