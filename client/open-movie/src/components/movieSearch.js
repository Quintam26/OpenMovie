import { useState } from "react";
import { useQuery, gql } from "@apollo/client";

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

function MovieSearch() {
  const [titleInput, setTitleInput] = useState("");

  const { loading, error, data } = useQuery(GET_MOVIES_BY_TITLE, {
    title: titleInput,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.movie.map(({ imdbID, Title, Rating, Poster }) => (
    <div>
      <label>Movie Search</label>
      <input type="text" onChange={event => setTitleInput(event.target.value)} />

      <div key={imdbID}>
        <h3>{Title}</h3>
        <img
          width="400"
          height="250"
          alt="location-reference"
          src={`${Poster}`}
        />
        <br />
        <b>Ratings for this movie:</b>
        <p>{Rating}</p>
        <br />
      </div>
    </div>
  ));
}

export default MovieSearch;