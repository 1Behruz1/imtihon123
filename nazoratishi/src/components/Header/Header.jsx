import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ display: 'flex', gap: '15px' }}>
      <Link to="/">Home</Link>
      <Link to="/popular">Popular</Link>
      <Link to="/top-rated">Top Rated</Link>
      <Link to="/upcoming">Upcoming</Link>
    </div>
  );
}

export default Header;
