import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const Movies = () => {
  const API_img = "https://image.tmdb.org/t/p/w500";
  const { movie } = useGlobalContext();
  return (
    <section className="movie-page">
      <h1>Tranding</h1>
      <div className="grid grid-4-col">
        {movie.map((curMovie) => {
          const { id, original_title, backdrop_path, vote_average } = curMovie;
          return (
            <NavLink to={`movie/${id}`} key={id}>
              <div className="card">
                <div className="card-info">
                  <img src={API_img + backdrop_path} alt={id} />
                  <h2>
                    {original_title.length >= 15
                      ? `${original_title}...`
                      : original_title}
                  </h2>
                  <h3>Rating {vote_average}</h3>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
