const { SlashCommandBuilder } = require("@discordjs/builders")
const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const prefix_db = new db.crearDB('prefix')

module.exports = {
    data: new SlashCommandBuilder()

  .setName("setprefix")
  .setDescription("selecciona un prefix"),

  async run(client, interaction){

  var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("No tenienes sufiecientes permisos")

  if(!args[0]) return message.channel.send("debes decir un nuevo prefix")

  message.guild.owner.send(`El prefix ha sido cambiabiado a **${args[0]}**`).catch('error', (err) => message.channel.send("El dueño tiene los messages cerrados") )


  prefix_db.establecer(message.guild.id, args[0])

  interaction,reply({content: `El prefix ha sido cambiado a **${args[0]}**`})

 }

}