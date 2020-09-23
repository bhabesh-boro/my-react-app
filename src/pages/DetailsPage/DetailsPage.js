import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailsPage() {
  const params = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?apikey=67be9b43&i=${params.key}`)
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
  if (!details) return null;

  return (
    <div className="container">
      <div className="card" style={{ width: "50rem", margin: "auto" }}>
        <div
          className="bd-placeholder-img card-img-top"
          style={{
            margin: "auto",
            width: "18rem",
            height: "18rem",
            overflow: "hidden",
          }}
        >
          <img src={details.Poster} style={{ width: "18rem" }} alt="Poster" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{details.Title}</h5>
          <div className="card-text">Released : {details.Released}</div>
          <div className="card-text">Runtime: {details.Runtime}</div>
        </div>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">Credits</h6>
          <div className="card-text">Director : {details.Director}</div>
          <div className="card-text">Actors : {details.Actors}</div>
          <div className="card-text">Writer : {details.Writer}</div>
        </div>
        <div className="card-body">{details.Plot}</div>
      </div>
      {/* <p> Details page : Imdb ID {params.imdbID}</p>
      <p>{details && details.Title}</p>

      <p>{details && details.Actors}</p>
      <p>{details && details.Awards}</p>
      <p>{details && details.Title}</p>
      <p>{details && details.Title}</p>
      <p>{details && details.Title}</p> */}
    </div>
  );
}
