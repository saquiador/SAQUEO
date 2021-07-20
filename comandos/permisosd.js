const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "perms", 
  alias: ["permisos"], 

execute (client, message, args){

  if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.channel.send("Dile a un admin que vea que permisos nesecitas para un comando")


  const embed = new Discord.MessageEmbed()

 .setTitle("**Bienvenido al apartado de perms**")
 .setDescription("<:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882>\n <:c_down2:847319297655439381>Sorteo , Reroll y end <a:4304_party10000:847679200130367529>  perms: MANAGE_EMOJIS\n\n<:c_down2:847319297655439381>Warns <a:Anuncios:855158942760828928>  perms: MANAGE_MESSAGES\n\n <:c_down2:847319297655439381>Nuke y Clear <:GH_r_warn:850080960632586294>  perms: MANAGE_MESSAGES\n\n<:c_down2:847319297655439381>Ban <:TAD_Bunny_BAN:847322683792162837>  perms: BAN_MEMBERS\n\n<:c_down2:847319297655439381>Kick perms: KICK_MEMBERS\n\n<:c_down2:847319297655439381>Ban-ip perms: BAN_MEMBERS\n\n<:c_down2:847319297655439381>embed perms: MANAGE_MESSAGES\n<:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882>")
 .setColor("GREEN")

message.channel.send(embed)



  

 }

}