const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const greet = new db.crearDB('greet')
module.exports = {
    data: new SlashCommandBuilder()

  .setName("greet")
  .setDescription("selecciona el canal de aviso")
  .addChannelOption(option => option.setName("greet").setDescription("selecciona canal de aviso").setRequired(true)),

  async run(client, interaction){

    const channel = interaction.options.getChannel('greet');
   var perms = message.member.hasPermission("MANAGER_CHANNELS")
   if(!perms) return message.channel.send("no tienes permiso!")
  
  const canal =  message.mentions.channels.first()
  if(!canal) return message.channel.send("Debes mencionar un canal")
  
  message.channel.send(`El canal de greet es ${canal}`)



greet.establecer(`${message.guild.id}`, `${canal.id}`)
    
    setTimeout(() =>{

  interaction.reply({content: `El canal de aviso es **${canal}**`, ephemeral: true });

    }, 3000)

 }

}