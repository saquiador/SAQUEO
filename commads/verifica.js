const { roleMention } = require('@discordjs/builders');
const { channel } = require('diagnostics_channel');
const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb');



module.exports = {
  name: "verificacion", 
  alias: ["v"], 

 async execute (client, message, args){

    message.delete();
   
   message.channel.messages.fetch("1020548785648173097").then(m => m.react("1020535296078659686"))



 }

}