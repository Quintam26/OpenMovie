const { AuthenticationError, ForbiddenError } = require('apollo-server');
const authErrMessage = '*** you must be logged in ***';

const resolvers = {
    Query: {
        getMovieById: (_, {imdbID}, {dataSources}) => {
            return dataSources.movieAPI.getMovieById(imdbID);
        },

        getMovieByTitle: (_,{Title}, {dataSources}) => {
            return dataSources.movieAPI.getMovieByTitle(Title);
        },

        user: async (_, { id }, { dataSources }) => {
            const user = await dataSources.accountsAPI.getUser(id);
            if (!user) {
              throw new Error('No user found for this Id');
            }
            return user;
        },
        me: async (_, __, { dataSources, userId }) => {
            if (!userId) throw new AuthenticationError(authErrMessage);
            const user = await dataSources.accountsAPI.getUser(userId);
            return user;
        },
      },
      
};

module.exports = resolvers;