const { RESTDataSource } = require('apollo-datasource-rest');
require("dotenv").config();

const ApiKey = process.env.API_KEY;

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

module.exports = MovieAPI;