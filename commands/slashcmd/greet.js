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
  .addChannelOption(option => option.setName("greet").setDescription("selecciona canal de aviso").setRequired(true))
  .setDefaultMemberPermissions('MANAGE_CHANNELS'),

  async run(client, interaction){

    const channel = interaction.options.getChannel('greet');
  
  if(!channel) return message.channel.send("Debes mencionar un canal")
  
  message.channel.send(`El canal de greet es ${channel}`)



greet.establecer(`${message.guild.id}`, `${canal.id}`)
    
    setTimeout(() =>{

  interaction.reply({content: `El canal de aviso es **${channel}**`, ephemeral: true });

    }, 3000)

 }

}