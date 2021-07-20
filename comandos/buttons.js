const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');
require('discord-buttons')(client);
const { MessageButton, MessageActionRow } = require('discord-buttons');
const disbut = require("discord-buttons");

module.exports = {
  name: "buttons", 
  alias: ["bs"], 

async execute (client, message, args){

const embed = new Discord.MessageEmbed()


.setTitle("Bienvenido al apartado de ayuda")
.setDescription('<:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882>\n\n<:c_down2:847319297655439381> Reacciona en <:c_rules2:847319240276312095>  para ir al apartado de  moderacion\n\n<:c_down2:847319297655439381>Reacciona en <a:c_controller:847645149914726431> para ir al apartado de divercion\n\n<:c_down2:847319297655439381>Reacciona en <a:c_star:847321049196527626>   para regresar a la pagina principal\n\n<:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882>')
.setAuthor(message.author.tag, message.author.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }))
.setFooter("Ddwbued")
.setColor("#134ff5")


const embed1 = new Discord.MessageEmbed()
.setTitle("Apartado de moderacion")
.setDescription("<:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882>\n<:TAD_Icon_Invite:847321691214053407>                                                                         <:TAD_Icon_Invite:847321691214053407>\n<a:puntitoamarillo:850444672898695248>setprefix `nuevo prefix`\ncambia el prefix\n\n<a:puntitoamarillo:850444672898695248>ban `mencion` `razon` \nBanea a un usuario <:TAD_Bunny_BAN:847322683792162837>\n\n<a:puntitoamarillo:850444672898695248>kick `mencion` `razon` \nExpluza a un usuario <:pepesip:847322763568218122>\n\n<a:puntitoamarillo:850444672898695248>clear `numero` \nBorra mensajes <a:penguClean:847644533918662707>\n\n<a:puntitoamarillo:850444672898695248>unban `mencion`\nDesbanea a un user <:GH_w_PotatoUnban:847644817550213180> \n\n<a:puntitoamarillo:850444672898695248>warn `mencion` `razon`\nWarnea a un user <a:NM_Warn:847644914720178219>      \n\n<a:puntitoamarillo:850444672898695248>warns `mencion`\nVe los warns <:c_rules2:847319240276312095>\n\n<a:puntitoamarillo:850444672898695248> nuke \nnukea canales\n\n<a:puntitoamarillo:850444672898695248>embed `canal` `color` `titulo` `mesaje`\n\n<a:puntitoamarillo:850444672898695248> lock\nLocked de un canal 🔒\n\n<a:puntitoamarillo:850444672898695248>     unlock\nUnlocked de un canal 🔓\n\n<a:puntitoamarillo:850444672898695248>greet `canal` \n selecciona el canal de greet , el mesaje de greet se borrara 5s\n<:TAD_Icon_Invite:847321691214053407>                                                                      <:TAD_Icon_Invite:847321691214053407>\n<:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882>")
.setColor("#ff3a3a")

const embed4 = new Discord.MessageEmbed()
.setTitle("Apartado de divercion")
.setDescription("<a:puntitoamarillo:850444672898695248>say `mesaje`\nhas que el bot diga algo")
.setColor("#3aff7f")

const embed3 = new Discord.MessageEmbed()

.setTitle("Apartado de economia")
.setDescription("<:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882>\n\n<a:puntitoamarillo:850444672898695248> work  \n Consigue dinero <a:GC_pepemoneyrain:847568852505067550>\n<:c_dot4:847320938054680597>\n<a:puntitoamarillo:850444672898695248>bal `mencion` `razon`  \nMira tu balance y otros user <a:GC_moneys:847566657081835530>\n<:c_dot4:847320938054680597>\n<a:puntitoamarillo:850444672898695248>crimen  \nPara robar a un local <:pepecrime:847566919765590047>\n\n<:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882>")
.setColor("#3a98ff")


const embed2 = new Discord.MessageEmbed()
.setTitle("Apartado de Giveawys")
.setDescription("<:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882>\n\n<a:puntitoamarillo:850444672898695248>Create `channel` `tiempo` `ganadores` `premio`\nCrear sorteo\n\n<a:puntitoamarillo:850444672898695248>reroll `id`\n escoje otro ganador\n\n<a:puntitoamarillo:850444672898695248>end `id`\ntermina un sorteo\n\n<:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882>")
.setColor("#ffef5b")


let option = new disbut.MessageMenuOption()
    .setLabel('dou d')
    .setEmoji('🍔')
    .setValue('1')
    .setDescription('Custom Description!')

let option3 = new disbut.MessageMenuOption()
    .setLabel('ty')
    .setEmoji('🍔')
    .setValue('3')
    .setDescription('wore!')

let sorteos = new disbut.MessageMenuOption()
    .setLabel('sorteos')
    .setEmoji('🍔')
    .setValue('sorteos')
    .setDescription('aps!')
    

 
    
let select = new disbut.MessageMenu()
    .setID('customid')
    .setPlaceholder('Click me! :D')
    .setMaxValues(1)
    .setMinValues(1)
    .addOptions(option, option3, sorteos)

 
let group2 = new disbut.MessageActionRow().addComponent(select);

  let m = await message.channel.send(embed, group2);


let collector = m.createMenuCollector((b) => b, { time: 10000 });
        collector.on('collect', (b) => {
            console.log(b.id);
            b.reply.defer();
        });
        collector.on('end', (b) => console.log('end'));

  client.on('clickMenu', async (menu) => {

    if (menu.values[0] === 'sorteos') {
        menu.message.components[0].components[0].setDisabled(false);
        
        menu.message.edit(embed2, { components: menu.message.components })
    }
});





 }

}