const resolvers = {
    Query: {
        getMovieById: (_, {imdbID}, {dataSources}) => {
            return dataSources.movieAPI.getMovieById(imdbID);
        },

        getMovieByTitle: (_,{Title}, {dataSources}) => {
            return dataSources.movieAPI.getMovieByTitle(Title);
        },
        
        getReviews:(_, __, {dataSources}) => {
            return dataSources.reviewAPI.getReviews();
        },
        getReviewsByMovie: (_,{name}, {dataSources}) => {
            return dataSources.reviewAPI.getReviewsByMovie(name);
        }
    }
};

module.exports = resolvers;