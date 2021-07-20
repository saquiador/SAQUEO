const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const cosa = new db.crearDB('canalsugerencias')

module.exports = {
  name: "sugerencia", 
  alias: ["su"], 

async execute (client, message, args){

  const canal = await cosa.obtener(`${message.guild.id}`, `${message.channel.id}`)
  
  
const canalsugerencia = client.channels.cache.get(canal)

if(!cosa.tiene(`${message.guild.id}`, `${message.channel.id}`)){
  message.channel.send("este servidor no tiene canal seleccionado")
  return;
}

const usuario = message.author

const sugerencia = args.join(" ")
if(!sugerencia) return message.channel.send("Tienes que escribir la sugerencia")

const embed = new Discord.MessageEmbed()

.setTitle("Nueva sugerencia")
 setAuthor(usuario, message.author.displayAvatarURL())
 .setDescription(`${sugerencia}`)
 .setColor("RANDOM")
 .setFooter("si quieres sugerir algo escribe S!sugerencia")
 
 const embedbueno =  new Discord.MessageEmbed()
 
 .setTitle("Todo salio bien")
 .setDescription("La sugerencia fue enviada al canal establecido")
 .setColor("REND")
 
 Message.channel.send(embedbueno)

canalsugerencia.send(embed).then(async msg => {
  
  await msg.react('✔');
  await msg.react('✖')
})
 
 console.log(canal)

 }

}