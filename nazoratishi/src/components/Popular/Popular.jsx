import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header'

function Popular() {
  const data = useLoaderData();
  return (
    <>
        <Header />
      <ul>
        {
            data.results.map(movie => (
                
               
                <li key={movie.id}> <img width={200} height={300}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                alt={movie.title} 
                /> <h1>{movie.title}</h1></li>
            ))
        }
      </ul>
    </>
  );
}

export default Popular;