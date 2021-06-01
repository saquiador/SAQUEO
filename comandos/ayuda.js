const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "ayuda", 
  alias: ["help"], 

execute (client, message, args){

const embedprincipal = new Discord.MessageEmbed()

.setTitle("Bienvenido al apartado de ayuda")
.setDescription('<:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882>\n\n<:c_down2:847319297655439381> Reacciona en <a:BlueDiamond:847324041621667840>  para ir al apartado de Economy\n\n<:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882>\n\n<:c_down2:847319297655439381> Reacciona en <:c_rules2:847319240276312095>  para ir al apartado de  moderacion\n\n<:c_down2:847319297655439381>Reacciona en <a:c_controller:847645149914726431> para ir al apartado de divercion\n\n<:c_down2:847319297655439381>Reacciona en <a:c_star:847321049196527626>   para regresar a la pagina principal\n\n<:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882>')
.setFooter("Ddwbued")
.setColor("BLUE")


const embedmoderacion = new Discord.MessageEmbed()
.setTitle("Apartado de moderacion")
.setDescription("<:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882>\n<:TAD_Icon_Invite:847321691214053407>                                                                         <:TAD_Icon_Invite:847321691214053407>\n<:TAD_Icon_Add:847322116357488690> r!ban   \nBanea a un usuario <:TAD_Bunny_BAN:847322683792162837>\n\n<:TAD_Icon_Add:847322116357488690> r!kick \nExpluza a un usuario <:pepesip:847322763568218122>\n\n<:TAD_Icon_Add:847322116357488690> r!clear \nBorra mensajes <a:penguClean:847644533918662707>\n\n<:TAD_Icon_Add:847322116357488690> r!unban \nDesbanea a un user <:GH_w_PotatoUnban:847644817550213180> \n\n<:TAD_Icon_Add:847322116357488690> r!warn\nWarnea a un user <a:NM_Warn:847644914720178219>      \n\n<:TAD_Icon_Add:847322116357488690> r!warns  \nVe los warns <:c_rules2:847319240276312095>\n<:TAD_Icon_Invite:847321691214053407>                                                                      <:TAD_Icon_Invite:847321691214053407>\n<:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882>")
.setColor("RED")

const embeddivercion = new Discord.MessageEmbed()
.setTitle("Apartado de divercion")
.setDescription("S!say")
.setColor("GREEN")

const embedeconomia = new Discord.MessageEmbed()

.setTitle("Apartado de economia")
.setDescription("<:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882>\n\n<:TAD_Icon_Add:847322116357488690> r!work  \n Consigue dinero <a:GC_pepemoneyrain:847568852505067550>\n<:c_dot4:847320938054680597>\n<:TAD_Icon_Add:847322116357488690>r!bal  \nMira tu balance <a:GC_moneys:847566657081835530>\n<:c_dot4:847320938054680597>\n<:TAD_Icon_Add:847322116357488690>r!crimen  \nPara robar a un local <:pepecrime:847566919765590047>\n\n<:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882><:c_line3:847320805763448882>")
.setColor("GREEN")

message.channel.send(embedprincipal).then(msg => {
  
  msg.react('<a:BlueDiamond:847324041621667840>')
  msg.react('<a:c_controller:847645149914726431>')
  msg.react('<:c_rules2:847319240276312095>')
  msg.react('<a:c_star:847321049196527626>')
  
  msg.awaitReactions((reaction, user) => {
            if(message.author.id !== user.id) return;
   if(reaction.emoji.id === '847321049196527626'){
                msg.edit(embedprincipal)
            }
   if(reaction.emoji.id === '847319240276312095'){
                msg.edit(embedmoderacion)
            }
if(reaction.emoji.id === '847324041621667840'){
                msg.edit(embedeconomia)
    }
 if(reaction.emoji.id === '847645149914726431'){
                msg.edit(embeddivercion)
            }
  })
  
})


 }

}