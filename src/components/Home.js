import React from 'react';
import { username, city } from '../data/user';

const Home = () => {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>Location: {city}</p>
    </div>
  );
};

export default Home;
