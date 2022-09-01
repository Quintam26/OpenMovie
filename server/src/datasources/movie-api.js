const { RESTDataSource } = require('apollo-datasource-rest');
require("dotenv").config();

const ReviewApiKey = process.env.REVIEW_API_KEY;
class ReviewAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.nytimes.com/svc/movies/v2";
    }
    
    getReviews() {
        return this.get(`reviews/search.json?api-key=${ReviewApiKey}`);
    }
    getReviewsByMovie(name) {
        return this.get(`reviews/search.json?query=${name}&api-key=${ReviewApiKey}`);
    }

}

module.exports = ReviewAPI;