import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailsPage() {
  const params = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios
      .get("http://www.omdbapi.com/?apikey=67be9b43&i=tt1905041")
      .then((res) => {
        setDetails(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  }, []);
  /**
   * Call server with imdbID
   * URL Format : http://localhost:3001/omdb/imdb/tt0944947
   * const imdbID = params.imdbID;
   */
  return (
    <div>
      <p> Details page : Imdb ID {params.imdbID}</p>
      <p>{details && details.Title}</p>

      <p>{details && details.Actors}</p>
      <p>{details && details.Awards}</p>
      <p>{details && details.Title}</p>
      <p>{details && details.Title}</p>
      <p>{details && details.Title}</p>
    </div>
  );
}
