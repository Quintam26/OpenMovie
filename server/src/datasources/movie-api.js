const { RESTDataSource } = require('apollo-datasource-rest');
require("dotenv").config();

const MovieApiKey = process.env.MOVIE_API_KEY;
const ReviewApiKey = process.env.REVIEW_API_KEY;

class MovieAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "http://www.omdbapi.com/";
    }
    
    getMovieById(imdbID) {
        return this.get(`?apikey=${MovieApiKey}&i=${imdbID}`);
    }

    getMovieByTitle(Title) {
        return this.get(`?apikey=${ApiKey}&t=${Title}`);
    }
}
class ReviewAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json/";
    }
    
    getReviewsByMovieTitle(display_title) {
        return this.get(`?query=${display_title}&api-key=${ReviewApiKey}`);
}

}

module.exports = MovieAPI, ReviewAPI;