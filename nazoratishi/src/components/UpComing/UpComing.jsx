import React from 'react';
import Item from "../Item/Item"

const Upcoming = ({ movies}) => {

  return (
    <div>
      {movies.map((movie) => (
        <Item key={movie.id} item={movie} />
      ))}
    </div>
  );
}

export default Upcoming;

