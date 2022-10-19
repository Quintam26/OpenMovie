const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        "Query to get a movie by their imdbID"
        getMovieById (imdbID: ID!): Movie!
        "Query to get a movie by their title"
        getMovieByTitle (Title: String!): Movie!
        "Query to get movie reviews"
        getReviews: Review!
        "Query to get reviews based on movie title"
        getReviewsByMovie (name:String!): Review
    }

    type Movie {
        "The movie's imdb ID"
        imdbID: ID!
        "The movie's title"
        Title: String!
        "The movie's director"
        Director: String!
        "The movie's release year"
        Year: String!
        "The movie's URL poster image"
        Poster: String!
        "The movie's critic ratings"
        Ratings: [Rating]!
    }

    type Rating {
        Source: String!
        Value: String!
    }

    type Review {
        results: [Results]
    }

    type Results {
        display_title: String!
        headline: String!
        summary_short: String!
        link: Link!
    }

    type Link {
        suggested_link_text: String!
        url: String!
    }
`

module.exports = typeDefs;