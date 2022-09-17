const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "perms", 
  alias: ["permisos"], 

execute (client, message, args){

  if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send("Dile a un admin que vea que permisos nesecitas para un comando")


  const embed = new Discord.MessageEmbed()

 .setTitle("<:question:917190046279405589> **Bienvenido al apartado de perms**")
 .setDescription("<:RedLine:1000615893316935750><:RedLine:1000615893316935750><:RedLine:1000615893316935750><:RedLine:1000615893316935750><:RedLine:1000615893316935750><:RedLine:1000615893316935750><:RedLine:1000615893316935750><:RedLine:1000615893316935750><:RedLine:1000615893316935750><:RedLine:1000615893316935750><:RedLine:1000615893316935750><:RedLine:1000615893316935750>\n\n <a:arrowblinking:1000616833797341306> Sorteo , Reroll y end perms: <:dotb:1000614271354409052>  `MANAGE_EMOJIS`\n\n<a:arrowblinking:1000616833797341306> Warns perms:  <:dotb:1000614271354409052> `MANAGE_MESSAGES`\n\n<a:arrowblinking:1000616833797341306>  Nuke y Clear perms:  <:dotb:1000614271354409052>`MANAGE_MESSAGES`\n\n<a:arrowblinking:1000616833797341306> Ban perms:  <:dotb:1000614271354409052>`BAN_MEMBERS`\n\n<a:arrowblinking:1000616833797341306> Kick perms:  <:dotb:1000614271354409052>`KICK_MEMBERS`\n\n<a:arrowblinking:1000616833797341306> Ban-ip perms:  <:dotb:1000614271354409052>`BAN_MEMBERS`\n\n<:RedLine:1000615893316935750><:RedLine:1000615893316935750><:RedLine:1000615893316935750><:RedLine:1000615893316935750><:RedLine:1000615893316935750><:RedLine:1000615893316935750><:RedLine:1000615893316935750><:RedLine:1000615893316935750><:RedLine:1000615893316935750><:RedLine:1000615893316935750><:RedLine:1000615893316935750><:RedLine:1000615893316935750>")
 .setColor("RED")

message.channel.send(embed)


  

 }

}