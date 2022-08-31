const resolvers = {
    Query: {
        getMovieById: (_, {imdbID}, {dataSources}) => {
            return dataSources.movieAPI.getMovieById(imdbID);
        },

        getMovieByTitle: (_,{Title}, {dataSources}) => {
            return dataSources.movieAPI.getMovieByTitle(Title);
        }
    },
    Review: {
        getReviewsByMovieTitle:(_, {display_title} , {dataSources}) => {
            return dataSources.reviewAPI.getReviewsByMovieTitle(display_title);
        }
    }
};

module.exports = resolvers;