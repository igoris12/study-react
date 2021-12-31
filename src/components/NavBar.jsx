import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav>
        <Link to="/study-react">
          <a>Home</a>
        </Link>
        <Link to="/study-react/countToolkit">
          <a>Count</a>
        </Link>
        <Link to="/study-react/fetchData">
          <a>Fetch data</a>
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
