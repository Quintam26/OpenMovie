const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        "Query to get movie reviews"
        getReviews: Review!
        getReviewsByMovie(name:String!): Review
      
    }

    type Review {
        results: [Results]
    }

    type Results {
        headline: String!
        summary_short: String!
        display_title: String!
        link: Link!
    }

    type Link {
        suggested_link_text: String!
        url: String!
    }

`

module.exports = typeDefs;