const Discord = require('discord.js'); 
const intents = new Discord.Intents(14023)
const client = new Discord.Client({disableMentions: 'everyone' , intents});
require('discord-buttons')(client);
const disbut = require("discord-buttons") 
const {MessageMenuOption, MessageMenu} = require("discord-buttons")
const { Client, Intents, MessageEmbed, Collection, Guild } = require('discord.js');



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
  
 
});


 








client.on('message', async message => { 


  let prefix;

  if(prefix_db.tiene(message.guild.id)) {
    prefix = await prefix_db.obtener(message.guild.id)
  }else{
   prefix = '/'
  }
  //Abrimos un evento message, esto es muy importante porque es donde estarán los comandos
  if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))){
  if(message.author.bot) return; //Con esto hacemos que el bot no responda a mensajes de otros bots lo cual evitará que entre en bucles
message.channel.send(`usa el comando ${prefix}help`)
}


  
 
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
    .setLabel('Info')
    .setEmoji('1000615406488277003')
    .setValue('op3')
    .setDescription('apartado principal')
    
let men = new disbut.MessageMenu()
    .setID('menuid')
    .setPlaceholder('Menu')
    .setMaxValues(1)
    .setMinValues(1)
    .addOption(opt1)
    .addOption(opt2)
    .addOption(opt3)

    const embedp = new Discord.MessageEmbed()


.setTitle("Bienvenido al apartado de ayuda")
.setDescription('<:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274>\n\n<a:arrowblinking:1000616833797341306> Reacciona en <:settings:1000615128296853564> para ir al apartado de  moderacion\n\n<a:arrowblinking:1000616833797341306> Reacciona en <:settings:1000615128296853564>  para ir al apartado de configuracion\n\n<a:arrowblinking:1000616833797341306> Reacciona en <:settings:1000615128296853564> para regresar a la pagina principal\n\n<:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274>')
.setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
.setFooter("Alma de roble")
.setColor("#c50000")


const embedm = new Discord.MessageEmbed()
.setTitle("Apartado de moderacion")
.setDescription("<:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274>\n       \n<:dotb:867146339287826443>setprefix `nuevo prefix`\ncambia el prefix\n\n<:dotb:867146339287826443>ban `mencion` `razon` \nBanea a un usuario <a:pepeban:867153701646237746>\n\n<:dotb:867146339287826443>kick `mencion` `razon` \nExpluza a un usuario <:pandacop:867153619442728980>\n\n<:dotb:867146339287826443>clear `numero` \nBorra mensajes \n\n<:dotb:867146339287826443>unban `mencion`\nDesbanea a un user  \n\n<:dotb:867146339287826443>warn `mencion` `razon`\nWarnea a un user      \n\n<:dotb:867146339287826443>warns `mencion`\nVe los warns <:rules:917834479136047144>\n\n nuke \nnukea canales\n\n<:dotb:867146339287826443>embed `canal` `color` `titulo` `mesaje`\n\n<:dotb:867146339287826443> lock\nLocked de un canal \n\n<:dotb:867146339287826443>     unlock\nUnlocked de un canal \n\n<:dotb:867146339287826443>greet `canal` \n selecciona el canal de greet , el mesaje de greet se borrara 5s\n\n<:dotb:867146339287826443>delete-greet\nBorra el canal de greet\n\n<:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274><:RedLine:1000613707115659274>")
.setColor("#c50000")

const embedc = new Discord.MessageEmbed()
.setTitle("Apartado de configuracion")
.setDescription("<:dotb:867146339287826443>8ball `mesaje`\n respuesta ramdon\n\n<:dotb:867146339287826443>avatar **menciona** \n avatar de usuarios")
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





client.login("MTAwMDU5NzEwMjg0NzYwMjY5OA.GlVfqV.GWqTxyllWSoeepurRebsROIGzaYQTS6yxH0L60")