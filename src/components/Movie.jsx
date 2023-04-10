import { useState } from "react";

import MovieStyle from "../styles/Movie-Style";
import MovieDetails from "./Movie-Details";

export default function Movie({ id, image, title, overview }) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      <MovieStyle onClick={() => setShowDetails(true)}>
        <img src={`https://image.tmdb.org/t/p/w500${image}`} alt="movie" />
        <h2>{title}</h2>
        <p>{overview}</p>
      </MovieStyle>
      {showDetails ? (
        <MovieDetails
          id={id}
          showDetails={showDetails}
          setShowDetails={setShowDetails}
        />
      ) : (
        <></>
      )}
    </>
  );
}
