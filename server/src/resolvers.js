const resolvers = {
    Query: {     
        getReviews:(_, __, {dataSources}) => {
            return dataSources.reviewAPI.getReviews();
        },
        getReviewsByMovie: (_,{name}, {dataSources}) => {
            return dataSources.reviewAPI.getReviewsByMovie(name);
        }
    },
};

module.exports = resolvers;