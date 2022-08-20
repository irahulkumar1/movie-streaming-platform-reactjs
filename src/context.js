import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();
const api_url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log("all Movie", data);
      if (data.results.length > 0) {
        setIsLoading(false);
        setMovie(data.results);
        // console.log(data, "setasdfasdf");
      } else {
        setIsError({
          show: true,
          msg: data.error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(movie, "movieasfasdfasdf");

  useEffect(() => {
    getMovies(api_url);
  }, []);

  return (
    <AppContext.Provider value={{ isLoading, movie, isError }}>
      {children}
    </AppContext.Provider>
  );
};

//global Custom Hooks
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
