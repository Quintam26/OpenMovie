import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
  <App />
</ApolloProvider>,
);

client
  .query({
    query: gql`
    query GetMovieByTitle($title: String!) {
      getMovieByTitle(Title: $title) {
        Director
    Poster
    Ratings {
      Source
      Value
    }
    Year
    imdbID
    reviews {
      results {
        display_title
        headline
        link {
          suggested_link_text
          url
        }
        summary_short
      }
    }
  }
}
    `,
    variables: {"title": "The Godfather"}
  })
  .then((result) => console.log("Query from index.js = ", result));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
