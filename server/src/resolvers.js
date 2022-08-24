const resolvers = {
    Query: {
        getMovieById: (_, {imdbID}, {dataSources}) => {
            return dataSources.movieAPI.getMovieById(imdbID);
        },

        getMovieByTitle: (_,{Title}, {dataSources}) => {
            return dataSources.movieAPI.getMovieByTitle(Title);
        }
    },
};

module.exports = resolvers;