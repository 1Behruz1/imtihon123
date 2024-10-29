import React from 'react';
import Item from '../Item/Item'
const TopRated = ({ movies}) => {

  return (
    <div>
      {movies.map((movie) => (
        <Item key={movie.id} item={movie} />
      ))}
    </div>
  );
}

export default TopRated;