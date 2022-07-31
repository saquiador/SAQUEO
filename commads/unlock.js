const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "unlock", 
  alias: ["Unlocked"], 

async execute (client, message, args){

 if  (!message.member.hasPermission('MANAGE_SERVER',  'MANAGE_CHANNELS'))  {
  return  message.channel.send("You  don't  have  enough  Permissions")
  }
  message.channel.overwritePermissions([
  {
  id:  message.guild.id,
  null  :  ['SEND_MESSAGES'],
  },
  ],);
  const  embed  =  new  Discord.MessageEmbed()
  .setTitle("🔓 Unlocked")
  .setDescription(`🔓 Ya pueden hablar en ${message.channel}`)
  .setColor("RANDOM");
  await  message.channel.send(embed);
  message.delete();
 }

}