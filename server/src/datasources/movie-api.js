const { RESTDataSource } = require('apollo-datasource-rest');
require("dotenv").config();

const MovieApiKey = process.env.MOVIE_API_KEY;
class MovieAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "http://www.omdbapi.com/";
    }
    
    getMovieById(imdbID) {
        return this.get(`?apikey=${MovieApiKey}&i=${imdbID}`);
    }

    getMovieByTitle(Title) {
        return this.get(`?apikey=${MovieApiKey}&t=${Title}`);
    }
}

module.exports = MovieAPI;