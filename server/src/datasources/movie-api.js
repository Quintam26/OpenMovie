const { RESTDataSource } = require('apollo-datasource-rest');
require("dotenv").config();

const ApiKey = process.env.API_KEY;
const ReviewApiKey = process.env.REVIEW_API_KEY;

class MovieAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "http://www.omdbapi.com/";
    }
    
    getMovieById(imdbID) {
        return this.get(`?apikey=${ApiKey}&i=${imdbID}`);
    }

    getMovieByTitle(Title) {
        return this.get(`?apikey=${ApiKey}&t=${Title}`);
    }
}

class ReviewAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = "https://api.nytimes.com/svc/movies/v2";
    }

    getReviews() {
        return this.get(`reviews/search.json?api-key=${ReviewApiKey}`);
    }
    getReviewsByMovie(name) {
        return this.get(`reviews/search.json?query=${name}&api-key=${ReviewApiKey}`);
    }
}

module.exports = MovieAPI, ReviewAPI;