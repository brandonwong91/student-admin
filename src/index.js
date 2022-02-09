const { ApolloServer } = require('apollo-server')
const { typeDefs } = require('./schema')
const { resolvers } = require('./resolvers')

const port = process.env.PORT || 9999;
const corsOptions = {
    origin: "*",
    credentials: true
  };

const server = new ApolloServer({ resolvers, typeDefs, corsOptions: corsOptions});

server.listen({ port }, () => console.log(`Server runs at: http://localhost:${port}`));
