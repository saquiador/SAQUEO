const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb')
const dinero = new db.crearDB('dinero')

module.exports = {
  name: "crime", 
  alias: ["crimen"], 

execute (client, message, args){

const user = message.author

if(!dinero.tiene(`${user.id}`)){
  dinero.establecer(`${user.id}`, 0)
}


  const crimenes = ['has robado un casino', 'has robado un almacen', 'has robado un banco']
 
const crimenesmalos = ['has robado un casino', 'has robado un almacen', 'has robado un banco']

  
  let resultadosbuenos = crimenes[Math.floor(Math.random() * crimenes.length)]
  
let resultadosmalos = crimenesmalos[Math.floor(Math.random() * crimenesmalos.length)]

let resultados = [resultadosbuenos, resultadosmalos]


let resultadofinal =  resultados[Math.floor(Math.random() * resultados.length)]

let dinerobueno = Math.floor(Math.random() * 175) + 100 

let dineromalo = Math.floor(Math.random() * 175) + -100

if(resultadofinal === resultadosbuenos){
dinero.sumar(`${user.id}`, dinerobueno);
   
   const embed = new Discord.MessageEmbed()
   
   .setTitle("😈CRIMEN😈")
   .setDescription(`${user} ${resultadosbuenos} y ha ganado ${dinerobueno}`)
   .setColor("GREEN")


message.channel.send(embed)

return;

}

if(resultadofinal === resultadosmalos){
 dinero.sumar(`${user.id}`, dineromalo);
  
  
  const embed = new Discord.MessageEmbed()
  
 .setTitle("😈CRIMEN😈")
  .setDescription(`${user} ${resultadosmalos} y has perdido ${dineromalo}`)
  .setColor("RED")
  
  message.channel.send(embed)

return;

  
}


 }

}