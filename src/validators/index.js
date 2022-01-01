export const isValidMessage = (message) => {
  const prefix = String(process.env.DEFAULT_PREFIX);
  return message.content.startsWith(prefix);
};

export const isValidInteraction = (interaction) => !interaction.isCommand();
