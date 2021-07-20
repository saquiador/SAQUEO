const Discord = require('discord.js'); 
const client = new Discord.Client({disableMentions: 'everyone'});
const { Client, MessageEmbed, Collection, Guild } = require('discord.js');
require('dotenv').config();
const keepAlive = require('./server.js');
const fs = require('fs'); 
let { readdirSync } = require('fs');

const db = require('megadb')
const prefix_db = new db.crearDB('prefix')

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./comandos/${file}`);
    client.commands.set(command.name, command);
}





let prefix;



const config = require('./config')
client.config = config

const { GiveawaysManager } = require('discord-giveaways')
client.giveawaysManager = new GiveawaysManager(client, {
  store: "/giveaways.json",
  updateCountdownEvery: 7000,
  default: {
    botsCanWinn: false,
    exemptPermissions: [],
    embedColor: '#0ad3c3',
    reaction: "847679200130367529"

  }
})

const greet = new db.crearDB("greet")
client.on("guildMemberAdd", async (member) => { 

if(!greet.tiene(member.guild.id)) return; // si no hay ningún canal establecido , que no ocurra nada 

const canal = await greet.obtener(member.guild.id)



client.channels.cache.get(canal).send(`<@${member.id}> pasa por este canal`).then(m => m.delete({ timeout: 6000}))
}); 






client.on
client.on('ready', async ()  =>  {
  console.log('Estoy  Listo');
  const  array  =  [
  {
  name:  `${client.guilds.cache.size} servers`,
  type:  `WATCHING`
  },
  {
  name:  `Minecraft`,
  type:  `PLAYING`
  },
  {
  name:  `giveaways`,
  type:  `WATCHING`
  },
  {
  name:  `Videos`,
  type:  `WATCHING`
  },
  {
  name:  `l!help l!ayuda`,
  type:  'WATCHING'
  }
  ]
  
  setInterval(()  =>  {
  function  presence()  {
  client.user.setPresence({
  status:  'idle',
  activity:  array[Math.floor(Math.random()  *  array.length)],
  });
  }
  presence();
  },  6000);
  
  client.channels.cache.get("856624906292559933").messages.fetch("862106590931976252").then(m => console.log("SE a cargado el mesaje"))
 
});




client.on("messageReactionAdd", async (reaction, user) => {
  
  const servidor = reaction.message.guild
  const mensaje = reaction.message 
  const canal = reaction.message.channel
  const miembro = await servidor.members.cache.get(user.id)



  if(servidor.id === "822994007747592223" && canal.id === "856624906292559933" && mensaje.id === "862106590931976252" && reaction.emoji.id === '861443203231907881'){
    miembro.roles.add("856621599322406933")
    miembro.send("Se te ha dado el rol")
  }
})









client.on('message', async message => { 


  let prefix;

  if(prefix_db.tiene(message.guild.id)) {
    prefix = await prefix_db.obtener(message.guild.id)
  }else{
   prefix = 'l!'
  }
  
  //Abrimos un evento message, esto es muy importante porque es donde estarán los comandos


if(message.author.bot) return; //Con esto hacemos que el bot no responda a mensajes de otros bots lo cual evitará que entre en bucles
if(!message.content.startsWith(prefix)) return; //Aquí hacemos que si el mensaje no empieza con el prefix el bot no responda

let usuario = message.mentions.members.first() || message.member; //Definimos el usuario
const args = message.content.slice(prefix.length).trim().split(/ +/g); //Definimos los argumentos
const command = args.shift().toLowerCase(); //Definimos el comandos
  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
if(cmd){
cmd.execute(client, message, args)


}





});



client.login(process.env.TOKEN)