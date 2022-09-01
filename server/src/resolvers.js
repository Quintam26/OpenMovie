const resolvers = {
    Query: {     
        getMovieByTitle: (_,{Title}, {dataSources}) => {
            return dataSources.movieAPI.getMovieByTitle(Title);
        }
    },
};

module.exports = resolvers;