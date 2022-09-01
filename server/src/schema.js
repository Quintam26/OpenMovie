const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        "Query to get a movie by their imdbID"
        getMovieById(imdbID: ID!): Movie!
        "Query to get a movie by their title"
        getMovieByTitle(Title: String!): Movie!
    }

    type Review {
        headline: String!
        summary_short: String!
        link: [Link]!
    }

    type Link {
        url: String!
    }
`

module.exports = typeDefs;