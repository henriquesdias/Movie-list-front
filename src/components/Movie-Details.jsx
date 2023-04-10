import useGetDetails from "../hooks/useGetDetails";
import Loading from "../styles/Loading";
import MovieDetailsStyle from "../styles/MoviesDetails-Style";

export default function MovieDetails({ id, showDetails, setShowDetails }) {
  const { details, error, isLoading } = useGetDetails(id);
  return (
    <MovieDetailsStyle
      showDetails={showDetails}
      isLoading={isLoading}
      onClick={() => setShowDetails(false)}
    >
      <div>
        {isLoading ? (
          <Loading loading={true} />
        ) : (
          <>
            <img
              src={`https://image.tmdb.org/t/p/w500${details?.poster_path}`}
              alt="movie"
            />
            <div>
              <h2>{details?.title}</h2>
              <p>{details?.overview}</p>
              <span>{details?.genres?.map((e) => `${e.name} `)}</span>
              <span>Release date: {details?.release_date}</span>
              <span>Duration: {details?.runtime} min</span>
            </div>
          </>
        )}
      </div>
    </MovieDetailsStyle>
  );
}
