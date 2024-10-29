import React from 'react';

const Item = ({ item }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.title} />
    </div>
  );
}

export default Item;
