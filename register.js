const fs = require('fs');
const path = require('path');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const { clientId } = require('./config.json');
const commands = [];
const commandsPath = path.join(__dirname, 'commands/slashcmd');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken("MTAwMDU5NzEwMjg0NzYwMjY5OA.G9Gmlx.HkkVLCUGDTaoPE5v_G1iYGQ2Xfq74MMH-TLxWw"); // aqui cambian eso por su token

rest.put(Routes.applicationGuildCommands(clientId), { body: commands })
    .then(() => console.log('Slash commands registrados correctamente.'))
    .catch(console.error);