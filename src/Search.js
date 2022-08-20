import { React, useState } from "react";
// import { useGlobalContext } from "./context";

const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query`;

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("prey");

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data, "data testing");
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <section className="search-section">
        <h2>Search Your Favourite Movie</h2>
        <form action="#" onSubmit={searchMovie}>
          <div>
            <input
              type="text"
              placeholder="search here"
              value={query}
              onChange={changeHandler}
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Search;
