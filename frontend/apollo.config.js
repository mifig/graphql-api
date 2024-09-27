module.exports = {
  client: {
    service: {
      localSchemaFile: './frontend/graphql/schema.graphql'
      // name: 'my-app',
      // url: 'http://localhost:3000/graphql', // Replace with your GraphQL endpoint
    },
    includes: [
      './app/**/*.tsx',
      './components/**/*.tsx',
      './lib/**/*.ts',
      './graphql/**/*.graphql',
    ],
  },
};