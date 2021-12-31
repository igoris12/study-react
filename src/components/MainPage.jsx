import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="mainPage">
      <h2>Projects list</h2>
      <ul>
        <Link to="/study-react/countToolkit">
          <li>1. Count Redux + Toolkit</li>
        </Link>
        <Link to="/study-react/fetchData">
          <li>2. Data fetching Redux + Toolkit</li>
        </Link>
      </ul>
    </div>
  );
};

export default MainPage;
