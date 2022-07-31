const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "lock", 
  alias: ["locked"], 

async execute (client, message, args){

  if  (!message.member.hasPermission('MANAGE_SERVER',  'MANAGE_CHANNELS'))  {
  return  message.channel.send("No tienes permisos")
  }
  message.channel.overwritePermissions([
  {
  id:  message.guild.id,
  deny  :  ['SEND_MESSAGES'],
  },
  ],);
  const  embed  =  new  Discord.MessageEmbed()
  .setTitle("🔒 locked")
  .setDescription(`🔒 has loked este canal ${message.channel}`)
  .setColor("RANDOM");

  await  message.channel.send(embed);
  message.delete();
 
 }

}
