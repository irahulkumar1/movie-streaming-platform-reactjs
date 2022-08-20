import { React, useState } from "react";
// import { useGlobalContext } from "./context";

const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query`;

const Search = () => {
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("");

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.results[0], "data testing");
      setMovie(data.results);
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
        {/* <h2>Search Your Favourite Movie</h2> */}
        <form action="#" onSubmit={searchMovie}>
          <div>
            <i className="bi bi-search"></i>
            <input
              type="text"
              placeholder="search here"
              value={query}
              onChange={changeHandler}
            />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </form>
      </section>
    </>
  );
};

export default Search;
