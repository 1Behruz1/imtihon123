import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Popular from './components/Popular/Popular';
import Toprated from './components/Toprated/Toprated';
import Upcoming from './components/Upcoming/Upcoming';

function App() {
  const API_KEY = '17f1ceadcf3767a35e55dd6204800668';

  const popular = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  };

  const upComing = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`);
    const data = await response.json();
    return data;                                                                                                 
  };

  const topRated = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`);
    const data = await response.json();
    return data;                                                                                                 
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <div><Header/><h1 className='h1'>Home</h1></div>
    },
    {
      path: '/popular',
      element: <Popular />,
      loader: popular
    },
    {
      path: '/upcoming',
      element: <Upcoming />,
      loader: upComing
    },
    {
      path: '/toprated',
      element: <Toprated />,  
      loader: topRated
    }
  ]);

  return (
    <>
      <Home />
      <RouterProvider router={router} />
    </>
  );
}

export default App;