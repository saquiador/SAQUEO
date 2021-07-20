const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "vote", 
  alias: ["voto"], 

execute (client, message, args){

  
 message.channel.send("aqui esta el link para que votes por mi en top.gg https://top.gg/bot/854789074039341086/vote")
 }

}