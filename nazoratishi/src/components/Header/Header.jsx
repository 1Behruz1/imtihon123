import { Link } from 'react-router-dom';

function Header() {
  return (
   <>
  <div style={{ display: 'flex', gap: '15px' }}>
    <Link to="/">Home</Link>
    <Link to="/popular">Popular</Link>
    <Link to="/upcoming">Upcoming</Link>
    <Link to="/toprated">Top Rated</Link>
  </div>
    </>
  );
}

export default Header;
