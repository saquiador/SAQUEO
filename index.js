const Discord = require('discord.js'); 
const intents = new Discord.Intents(14023)
const client = new Discord.Client({disableMentions: 'everyone' , intents});
require('discord-buttons')(client);
const disbut = require("discord-buttons") 
const {MessageMenuOption, MessageMenu} = require("discord-buttons")
const { Client, Intents, MessageEmbed, Collection, Guild } = require('discord.js');
const path = require('path');



const fs = require('fs'); 
let { readdirSync } = require('fs');

const db = require('megadb')

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commads').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commads/${file}`);
    client.commands.set(command.name, command);
}

client.slashCommands = new Collection();

const slashCommandFolder = path.join(__dirname, 'commands/slashcmd'); // este es la carpeta donde iran los slash
const slashCommandFiles =  fs.readdirSync(slashCommandFolder).filter(file => file.endsWith('.js')); // Filtra solo los .js

for (const file of slashCommandFiles) {
    const filePath = path.join(slashCommandFolder, file);
    const command = require(filePath);
    client.slashCommands.set(command.data.name, command);
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
    embedColor: '#c50000',
    reaction: "867147494311329812"

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
  name:  `alma de roble`,
  type:  `PLAYING`
  },
  {
  name:  `Actualizaciones`,
  type:  `WATCHING`
  },
  {
  name:  `usuarios`,
  type:  `WATCHING`
  },
  {
  name:  `moderando`,
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
  
 
  client.channels.cache.get("1003319112757424171").messages.fetch("1020548785648173097").then(m => console.log("SE a cargado el mesaje"))
 
});




client.on("messageReactionAdd", async (reaction, user) => {
  
  const servidor = reaction.message.guild
  const mensaje = reaction.message 
  const canal = reaction.message.channel
  const miembro = await servidor.members.cache.get(user.id)



  if(servidor.id === "1000595274558865478" && canal.id === "1003319112757424171" && mensaje.id === "1020548785648173097" && reaction.emoji.id === '1020535296078659686'){
    miembro.roles.add("1003321480819511386")
    miembro.send("Se te ha dado el rol")
  }
})







client.on('message', async message => { 


  let prefix = '.'
   



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

  

  
 
if(message.content.startsWith(prefix + 'help')){

   if(message.author.bot) return;

    
let opt1 = new disbut.MessageMenuOption()
    .setLabel('Moderacion')
    .setEmoji('917834479136047144')
    .setValue('op1')
    .setDescription('apardado de moderacion')

let opt2 = new disbut.MessageMenuOption()
    .setLabel('Configuracion')
    .setEmoji('1000615128296853564')
    .setValue('op2')
    .setDescription('apartado de anti-raid y configuracion')


let opt3 = new disbut.MessageMenuOption()
    .setLabel('sorteo')
    .setEmoji('1000614271354409052')
    .setValue('op3')
    .setDescription('apartado sorteo')

let opt4 = new disbut.MessageMenuOption()
    .setLabel('Info')
    .setEmoji('1000615406488277003')
    .setValue('op4')
    .setDescription('apartado principal')

    
let men = new disbut.MessageMenu()
    .setID('menuid')
    .setPlaceholder('Menu')
    .setMaxValues(1)
    .setMinValues(1)
    .addOption(opt1)
    .addOption(opt2)
    .addOption(opt3)
    .addOption(opt4)

    const embedp = new Discord.MessageEmbed()


.setTitle("<a:moon:1000615406488277003> **Bienvenido al apartado de ayuda**")
.setDescription('<:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274>\n\n<a:arrowblinking:1000616833797341306> Reacciona en <:rules:1000614433397145710>  para ir al apartado de  moderacion\n\n<a:arrowblinking:1000616833797341306> Reacciona en <:settings:1000615128296853564>  para ir al apartado de configuracion\n\n<a:arrowblinking:1000616833797341306> Reacciona en <:dotb:1000614271354409052>  para ir a el apartado de sorteo\n\n<a:arrowblinking:1000616833797341306> Reacciona en <a:moon:1000615406488277003>  para regresar a la pagina principal\n\n<:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274>')
.setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
.setFooter("SouL")
.setColor("#c50000")


const embedm = new Discord.MessageEmbed()
.setTitle("<:rules:1000614433397145710> **Apartado de moderacion**")
.setDescription("<:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274>\n\n<:dotb:1000614271354409052>ban `mencion` `razon` \nBanea a un usuario <a:pepeban:1000614189808754768>\n\n<:dotb:1000614271354409052>kick `mencion` `razon` \nExpluza a un usuario <:pandacop:1000614338861727774> \n\n<:dotb:1000614271354409052>clear `numero` \nBorra mensajes \n\n<:dotb:1000614271354409052>unban `mencion`\nDesbanea a un user  \n\n<:dotb:1000614271354409052>warn `mencion` `razon`\nWarnea a un user      \n\n<:dotb:1000614271354409052>warns `mencion`\nVe los warns <:rules:1000614433397145710> \n\n<:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274>")
.setColor("#c50000")

const embedc = new Discord.MessageEmbed()
.setTitle("<:settings:1000615128296853564> **Apartado de configuracion**")
.setDescription("<:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274>\n       \n <:dotb:1000614271354409052>permisos\nDescubre los permisos que nesecitas para cada comando\n\n<:dotb:1000614271354409052>nuke \nnukea canales\n\n<:dotb:1000614271354409052> lock\nLocked de un canal \n\n<:dotb:1000614271354409052>     unlock\nUnlocked de un canal \n\n<:dotb:1000614271354409052>greet `canal` \n selecciona el canal de greet , el mesaje de greet se borrara 5s\n\n<:dotb:1000614271354409052>delete-greet\nBorra el canal de greet\n\n<:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274>")
.setColor("#c50000")

const embedg = new Discord.MessageEmbed()
.setTitle("<a:845929852694429696:917185190768541816> **Apartado de Giveways**")
.setDescription("<:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274>\n\n<:dotb:1000614271354409052>Create `Canal` `Duracion` `Numero de ganadores` `Premio` <a:845929852694429696:917185190768541816>\nCrea un sorteo personalizado\n\n<:dotb:1000614271354409052>reroll `ID del sorteo`\nencuentra otro gandor del sorteo\n\n<:dotb:1000614271354409052>end `ID del sorteo`\nTermina el sorteo\n\n<:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274>")
.setColor("#c50000")




let msg = await message.channel.send(embedp, men) 




client.on('clickMenu', async (menu) => { 
  if(menu.values[0] === "op1"){ 
  menu.reply.defer(); 
  msg.edit(embedm)
  } 
  if(menu.values[0] === "op2"){ 
  menu.reply.defer(); 
  msg.edit(embedc)
  } 
  if(menu.values[0] === "op3"){ 
  menu.reply.defer(); 
  msg.edit(embedg)
  } 
  if(menu.values[0] === "op4"){ 
    menu.reply.defer(); 
    msg.edit(embedp)
    } 
  });
  }




if(!message.content.startsWith(prefix)) return; //Aquí hacemos que si el mensaje no empieza con el prefix el bot no responda



let usuario = message.mentions.members.first() || message.member; //Definimos el usuario
const args = message.content.slice(prefix.length).trim().split(/ +/g); //Definimos los argumentos
const command = args.shift().toLowerCase(); //Definimos el comandos






  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
if(cmd){
cmd.execute(client, message, args)

}

});





client.login("MTAwMDU5NzEwMjg0NzYwMjY5OA.G9Gmlx.HkkVLCUGDTaoPE5v_G1iYGQ2Xfq74MMH-TLxWw")