import { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_MOVIE_BY_TITLE = gql`
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
`;

export default function MovieSearch() {
  const [titleInput, setTitleInput] = useState("");

  const { loading, error, data } = useQuery(GET_MOVIE_BY_TITLE, {
    variables: { title: titleInput },
  });
  
  console.log(JSON.stringify(data, null, 2));
  
  // if (loading) return null;
  // if (error) return `Error! ${error}`;
  
  return (
    <div style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)'
    }}>
      <div>
        <label>
          Movie Title Search: <span/>
          <input type="text" onChange={event => {
            event.preventDefault();
            setTitleInput(event.currentTarget.value)}}/>
        </label>
        
      </div>
      
     {data && 
      <div >
        <br/>
         <img src={data.getMovieByTitle.Poster} alt="None"/>
        <p>
          <b>Director: </b>{data.getMovieByTitle.Director}
        </p>
        <p>
          <b>Year: </b>{data.getMovieByTitle.Year}
        </p>
        <p>
          <b>IMDB ID: </b>{data.getMovieByTitle.imdbID}
        </p>
        <p><b>Ratings: </b> 
          {data.getMovieByTitle.Ratings && data.getMovieByTitle.Ratings.map((rating, index) => {
            return (
              <p key={index}>
                {rating.Source}
                <br/>
                {rating.Value}
              </p>
            )
          })}
        </p>
        <p><b>Reviews: </b> 
          {data.getMovieByTitle.reviews.results && data.getMovieByTitle.reviews.results.slice(0,3).map((result, index) => {
            return (
              <p key={index}>
                {result.display_title}
                <br/>
                <a href={result.link.url}>{result.link.url}</a>
              </p>
            )
          })}
        </p>
      </div>
     }
    </div>
  );
}