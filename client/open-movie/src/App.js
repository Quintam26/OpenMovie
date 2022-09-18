// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';

export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br/>
      <DisplayMovie />
    </div>
  );
}

export const GET_MOVIES_BY_TITLE = gql`
 query getMovieByTitle($title: String!) {
  getMovieByTitle(Title: $title) {
    imdbID
    Title
    Director
    Year
    Ratings {
      Value
      Source
    }
    Poster
  }
}
`;

function DisplayMovie() {
  const { loading, error, data } = useQuery(GET_MOVIES_BY_TITLE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.movie.map(({ imdbID, Title, Rating, Poster }) => (
    <div key={imdbID}>
      <h3>{Title}</h3>
      <img width="400" height="250" alt="location-reference" src={`${Poster}`} />
      <br />
      <b>Ratings for this movie:</b>
      <p>{Rating}</p>
      <br />
    </div>
  ));
}
