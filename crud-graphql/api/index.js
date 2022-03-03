const { ApolloServer } = require("apollo-server");
const UsersAPIS = require("./user/datasource/user");
const userResolvers = require("./user/resolvers/userResolvers");
const userSchema = require("./user/schema/user.graphql");

const typeDefs = [userSchema];
const resolvers = [userResolvers];

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      usersAPI: new UsersAPIS()
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`Servidor rodando na porta ${url}`);
});
