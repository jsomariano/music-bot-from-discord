import { Collection } from 'discord.js';
import commands from '../values/commands';

export default async (message) => {
  const commandsCollection = new Collection();

  commands.forEach((command) => {
    commandsCollection.set(command.name, command);
  });

  await message.guild.commands.set(commandsCollection);
  await message.reply('Bot iniciado, para verificar os comandos disponíveis digite /help');
};
