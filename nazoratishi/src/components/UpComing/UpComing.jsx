import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header'

function upComing() {
  const data = useLoaderData();

  return (
    <>
        <Header/>
      <ul>
        {
            data.results.map(up => (
              <li key={up.id}>
                <img 
                width={200}
                height={300}
                src={`https://image.tmdb.org/t/p/original${up.poster_path}`} 
                alt={up.title} 
                className="movie-poster" 
                />
                <h1>{up.title}</h1></li>
            ))
        }
      </ul>
    </>
  );
}

export default upComing ;