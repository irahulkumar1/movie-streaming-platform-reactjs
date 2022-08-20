import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const Movies = () => {
  const API_img = "https://image.tmdb.org/t/p/w500";
  const { movie } = useGlobalContext();
  return (
    <section className="movie-page">
      <div className="grid grid-4-col">
        {movie.map((curMovie) => {
          const { id, original_title, backdrop_path, vote_average } = curMovie;
          return (
            <NavLink to={`movie/${id}`}>
              <div className="card">
                <div className="card-info">
                  <h2>{original_title}</h2>
                  <img src={API_img + backdrop_path} alt={id} />
                  <p>{vote_average}</p>
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
