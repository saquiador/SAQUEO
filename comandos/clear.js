const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "clear", 
  alias: ["limpear"], 

execute (client, message, args){

  const cantidad =  args.join(" ");
  
  message.delete();
  
  var perms = message.member.hasPermission("MANAGE_MESSAGES")
  if(!perms) return message.channel.send("No tienes permiso para este comando")
  
  if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.sens("nesecitas el permiso **gestionar mesaje** para usarlo")
  
  if(!cantidad) return message.channel.send("escribe un numero")
  if(cantidad === '0') return message.channel.send("Debes escribir un numero mayor al 0!")
  
  
  
  message.channel.bulkDelete(cantidad).then(()=> {
    
    
    const embed = new Discord.MessageEmbed()

 .setTitle("🗑Clear🗑")
 .setDescription(`E borrado **${cantidad}** Mesajes con exito ✔`)
 .setColor("RED")
    
    message.channel.send(embed).then(msg => {
msg.delete({timeout: 5000})
})

  })
  

 }

}