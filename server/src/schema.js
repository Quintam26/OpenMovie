const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        "Query to get an array of movies"
        movies: [Movie]!
    }

    type Movie {
        imdbID: String!
        "The movie's title"
        title: String!
        "The movie's director"
        director: String!
        "The movie's release year"
        year: String!

    }
`

module.exports = typeDefs;