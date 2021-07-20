const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: "invites", 
  alias: ["i"], 

execute (client, message, args){

const { guild } = message

guild.fetchInvites().then((invites) => {
      const inviteCounter = {}

      invites.forEach((invite) => {
        const { uses, inviter } = invite
        const { username, discriminator } = inviter

        const name = `${username}#${discriminator}`

        inviteCounter[name] = (inviteCounter[name] || 0) + uses
      })

      let replyText = 'Invites:'

      const sortedInvites = Object.keys(inviteCounter).sort(
        (a, b) => inviteCounter[b] - inviteCounter[a]
      )

    

      sortedInvites.length = 3

      for (const invite of sortedInvites) {
        const count = inviteCounter[invite]
        replyText += `\n${invite} Tiene ${count} invites`
      }

      message.reply(replyText)
    })
 }

}

    