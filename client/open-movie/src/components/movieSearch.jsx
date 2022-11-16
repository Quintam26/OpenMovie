import { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_MOVIE_BY_TITLE = gql`
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

export default function MovieSearch() {
  const [titleInput, setTitleInput] = useState("");

  const { loading, error, data } = useQuery(GET_MOVIE_BY_TITLE, {
    variables: { title: titleInput },
  });

  console.log("titleInput = ",titleInput);
  
  return (
    <div>
      <div>
        <label>Movie Search</label>
        <input type="text" onChange={event => console.log("setTitleInut = ",setTitleInput(event.target.value))} />
      </div>

      {data &&
        data.movie.map(({ imdbID, Title, Rating, Poster }) => (
          <div>
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
      ))}
      {loading && <p>Loading...</p>}
      {error && <p>Error :(</p>}
    </div>
  );
}
