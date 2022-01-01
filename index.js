import dotenv from 'dotenv';
import { Client, Intents } from 'discord.js';
import { isValidMessage, isValidInteraction } from './src/validators';
import setCommands from './src/helpers/setCommands';
import ping from './src/commands/ping';
import help from './src/commands/help';
import play from './src/commands/play';

const COMMANDS_SUPORTED = {
  start: setCommands,
  ping,
  help,
};

dotenv.config();

const {
  BOT_TOKEN,
} = process.env;

const client = new Client({ intents: [Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILDS] });

client.on('ready', () => {
  client.user?.setActivity('Blabla', { type: 'LISTENING' });
  console.log('Iniciado');
});

client.on('messageCreate', async (message) => {
  if (!isValidMessage(message)) return;

  const messageContent = message.content.slice(1);

  const selectedCommand = await COMMANDS_SUPORTED[messageContent.toLowerCase()];
  await selectedCommand(message);
});

client.on('interactionCreate', async (interaction) => {
  if (!isValidInteraction(interaction)) return;

  switch (interaction.commandName) {
    case 'play':
      await play.execute(interaction);
      break;
    default:
      break;
  }
});

client.login(String(BOT_TOKEN));
