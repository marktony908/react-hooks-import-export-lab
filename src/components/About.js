import React from 'react';
import { image } from '../data/user';

const About = () => {
  return (
    <div>
      <img src={image} alt="Profile" />
      <p>About me</p>
    </div>
  );
};

export default About;
