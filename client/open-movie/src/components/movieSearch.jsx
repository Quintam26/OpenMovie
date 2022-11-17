import { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_MOVIE_BY_TITLE = gql`
  query GetMovieByTitle($title: String!) {
  getMovieByTitle(Title: $title) {
    Director
    Poster
    Year
    imdbID
  }
}
`;

export default function MovieSearch() {
  const [titleInput, setTitleInput] = useState("");

  const { loading, error, data } = useQuery(GET_MOVIE_BY_TITLE, {
    variables: { title: titleInput },
  });
  
  console.log("titleInput = ",titleInput);
  
  // if (loading) return null;
  // if (error) return `Error! ${error}`;
  
  return (
    <div>
      <div>
        <label>
          Movie Title:
          <input type="text" onChange={event => {
            event.preventDefault();
            setTitleInput(event.currentTarget.value)}}/>
        </label>
        
      </div>
      
     {data && 
      <div>
        <p>Director: {data.getMovieByTitle.Director}</p>
        <p>Year: {data.getMovieByTitle.Year}</p>
        <p>Ratings: {data.getMovieByTitle.Ratings}</p>
        <img src={data.getMovieByTitle.Poster} alt="None"/>
      </div>
     }
    </div>
  );
}