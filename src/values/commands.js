export default [
  {
    name: 'play',
    description: 'Executa uma musica!',
    options: [
      {
        name: 'query',
        type: 'STRING',
        description: 'A musica que você quer tocar',
        required: true,
      },
    ],
  },
];
