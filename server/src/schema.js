const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        "Query to get a movie by their imdbID"
        getMovieById(imdbID: ID!): Movie!
        "Query to get a movie by their title"
        getMovieByTitle(Title: String!): Movie!
         ### User accounts
        user(id: ID!): User
        "Currently logged-in user"
        me: User!
}

    #### User accounts

    interface User {
        id: ID!
        "The user's first and last name"
        name: String!
        "The user's profile photo URL"
        profilePicture: String!
}

    type Movie {
        "The movie's imdb ID"
        imdbID: String!
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
    
`

module.exports = typeDefs;