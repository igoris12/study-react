import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <nav>
        <Link to="/study-react">Home</Link>
        <Link to="/study-react/countToolkit">Count</Link>
        <Link to="/study-react/fetchData">Fetch data</Link>
      </nav>
    </>
  );
};

export default NavBar;
