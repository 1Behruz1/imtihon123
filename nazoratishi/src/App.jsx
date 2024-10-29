import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./components/Home/Home"
import Popular from "./components/Popular/Popular";
import TopRated from "./components/TopRated/TopRated";
import Upcoming from "./components/UpComing/UpComing";
import Header from "./components/Header/Header";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const popular = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=17f1ceadcf3767a35e55dd6204800668');
      const topRated = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=17f1ceadcf3767a35e55dd6204800668');
      const upcoming = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=17f1ceadcf3767a35e55dd6204800668');

      const popularData = await popular.json();
      const topRatedData = await topRated.json();
      const upcomingData = await upcoming.json();

      setPopularMovies(popularData.results);
      setTopRatedMovies(topRatedData.results);
      setUpcomingMovies(upcomingData.results);
    };

    fetchMovies();
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/popular',
      element: <Popular movies={popularMovies} />,
    },
    {
      path: '/top-rated',
      element: <TopRated movies={topRatedMovies} />,
    },
    {
      path: '/upcoming',
      element: <Upcoming movies={upcomingMovies}/>,
    },
  ]);

  return (
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;