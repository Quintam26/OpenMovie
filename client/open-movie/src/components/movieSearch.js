import { useQuery, gql } from "@apollo/client";
import React, { useState } from 'react'


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
  const [titleInput, setTitleInput] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setTitleInput(e.target.value);
  };

  const { loading, error, data, } = useQuery(GET_MOVIES_BY_TITLE, {
    title: titleInput,
  },);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.movie.map(({ imdbID, Title, Rating, Poster }) => (

    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={titleInput} />


      <div key={imdbID}>
        <h3>{Title}</h3>
        <img width="400" height="250" alt="location-reference" src={`${Poster}`} />
        <br />
        <b>Ratings for this movie:</b>
        <p>{Rating}</p>
        <br />
      </div>

    </div>
  ));
}

export default MovieSearch;