const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "8ball", 
  alias: ["8ball"], 

execute (client, message, args){

if (message.author.bot) return;

    message.delete()
  
    let pregunta = args.slice(0).join(' ');

    if (!pregunta[1]) return message.channel.send(":x: | Tienes que agregar una pregunta").then(alerta => {
      setTimeout(() => {
        alerta.delete()
      }, 7000);
    })

    var respuesta = ["Si", "No", "¿Que te hace pensar eso?", "Claro que si!", "Claro que no", "Eso es estupido"]

    var respuesta1 = Math.floor(Math.random() * respuesta.length);

    const embed = new MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
      .setTitle(":8ball:")
      .setColor('GREEN')
      .addField("Usuario", message.author.username)
      .addField("Pregunta", pregunta, true)
      .addField("Respuesta", respuesta[respuesta1], true)
      .setThumbnail(message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
    message.channel.send(embed)

  }


}
