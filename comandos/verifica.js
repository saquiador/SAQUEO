const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');



module.exports = {
  name: "ver", 
  alias: ["v"], 

 async execute (client, message, args){


   
   message.channel.messages.fetch("862106590931976252").then(m => m.react("861443203231907881"))

  


 }

}