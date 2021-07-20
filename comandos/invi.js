const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "invite", 
  alias: ["in"], 

execute (client, message, args){

 const embed = new Discord.MessageEmbed()

 .setTitle(`Invitaviòn`)
 .setDescription(`Aqui te mando el enlace para que me invites a tu server\n[Invitaciòn con Administrador](https://discord.com/api/oauth2/authorize?client_id=854789074039341086&permissions=8&scope=bot)\nTe mando el link para que votes por mi \n[top.gg](https://top.gg/bot/854789074039341086/vote)\nAqui te mando mi server de soporte\n[Discord](https://discord.gg/faEsggzppP)`)
 .setImage('https://media.discordapp.net/attachments/854758811218083871/854794269624762408/occami_hoverboad_gif.gif?width=672&height=476')
 .setColor("#00D0FF")


message.channel.send("la invite se ha mandado a tu dm")
message.author.send(embed)


 }

}