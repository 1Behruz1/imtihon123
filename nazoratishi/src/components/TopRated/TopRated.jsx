import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header'

function Toprated() {
  const data = useLoaderData();
  return (
    <>
          <Header/>
      <ul>
        {
            data.results.map(top => (
              <li key={top.id}>
                <img 
                width={200}
                height={300}
                src={`https://image.tmdb.org/t/p/original${top.poster_path}`} 
                alt={top.title} 
                />{top.title}</li>
            ))
        }
      </ul>
    </>
  );
}

export default Toprated;