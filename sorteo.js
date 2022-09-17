const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const ms = require('ms')


module.exports = {
  name: "sorteo", 
  alias: ["create"], 

execute (client, message, args){

var perms = message.member.hasPermission("MANAGE_EMOJIS")
if(!perms) return message.channel.send("no tienes permisos")

let channel = message.mentions.channels.first()
if(!channel) return message.channel.send("Menciona un canal")


let giveawayDuration = args[1]
if(!giveawayDuration || isNaN(ms(giveawayDuration))) return message.channel.send("Debes poner cuanto durara")


let giveawayWinners = parseInt(args[2])
if(isNaN(giveawayWinners) || (parseInt(giveawayWinners) <= 0)) return message.channel.send("Di un numero valido de ganadores")


let giveawayPrice = args.slice(3).join(" ")
if(!giveawayPrice) return message.channel.send("Debes decir que ganaran")


client.giveawaysManager.start(channel, {
  time: ms(giveawayDuration),
  prize: giveawayPrice,
  winnerCount: giveawayWinners,
  hostedBy: client.config.hostedBy ? message.author: null,




  messages: {
    giveaway: (client.config.everyoneMention ? "hola\n\n" : "") + "**NUEVO SORTEO**",
    giveawayEnded: (client.config.everyoneMention ? "VEAMOS\n\n" : "") + "**<a:4304_party10000:847679200130367529><a:4304_party10000:847679200130367529>SORTEO FINALISADO<a:4304_party10000:847679200130367529><a:4304_party10000:847679200130367529>**",
    timeRemainig: 'Tiempo restante: **{duration}**',
    invitaToParticipate: 'Reacciona en <a:4304_party10000:847679200130367529> para participar',
    winMessage: '<a:giftemoji:847678819409854474> Aganado... **{winners}** <a:4304_party10000:847679200130367529> tu premio es **{prize}**',
    embedFooter: "Winner",
    noWinner: "Nadie participo en el sorteo <:pepesip:847322763568218122>",
    hostedBy: 'Creado por **{user}** <a:GC_pepemoneyrain:847568852505067550>',
    winners: "ganadores",
    embedAt: 'finaliza en',
    units: {
      seconds: 'segundos',
      minutes: 'munitos',
      hours: 'horas',
      days: 'dias',
      plural5: false
    }
  }
})

message.channel.send(`sorteo empezado en **${channel}**`)

 }

}