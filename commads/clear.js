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
  
  
  if(!cantidad) return message.channel.send("escribe un numero")
  if(cantidad === '0') return message.channel.send("Debes escribir un numero mayor al 0!")
  
  
  
  message.channel.bulkDelete(cantidad).then(()=> {
    
    

    
    message.channel.send(`E borrado **${cantidad}** Mesajes con exito`).then(msg => {
msg.delete({timeout: 5000})
})

  })
  

 }

}