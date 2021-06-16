const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "invite", 
  alias: ["i"], 

execute (client, message, args){

 const embed = new Discord.MessageEmbed()

 .setTitle(`Invitaviòn`)
 .setDescription(`Aqui te mando el enlace para que me invites a tu server\n[Invitaciòn con Administrador](https://discord.com/api/oauth2/authorize?client_id=850105617812029472&permissions=8&scope=bot)`)
 .setImage('https://media.discordapp.net/attachments/822994008284200993/850944954267336704/original.gif')
 .setColor("#00D0FF")


message.channel.send("la invite se ha mandado a tu dm")
message.author.send(embed)


 }

}