const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "unban", 
  alias: ["desban"], 

async execute (client, message, args){

var perms = message.member.hasPermission("BAN_MEMBERS")
if(!perms) return message.channel.send("No tienes suficientes permisos")

if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("No tengo suficientes permisos")


let userID = args[0];
const member = await client.users.fetch(userID)

message.guild.fetchBans().then(bans => {
  if(bans.size === 0) return message.channel.send("El servidor no tiene ningun mienbro baniados")
 
 let bUser = bans.find(b => b.user.id == userID)
 if(!bUser) return message.channel.send("Ese mienbro no esta baniado")
 
})
  
message.channel.send(`El usuario **${member.username}** fue desbaniado`)
  

 }

}