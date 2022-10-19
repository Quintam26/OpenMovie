const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const MovieAPI = require('./datasources/movie-api');
const ReviewAPI = require('./datasources/reviews-api')

const server = new ApolloServer({
    typeDefs, 
    resolvers,
    dataSources: () => {
        return {
            movieAPI: new MovieAPI(),
            reviewAPI: new ReviewAPI()
        }
    }
});

server.listen({port: process.env.PORT || 4099}).then(() => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
    `)
});