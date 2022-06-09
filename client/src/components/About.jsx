import React from 'react';
import { about } from '../text/text.json';
import { Para } from '../styles/styles.js';

const About = () => (
  <div>
    {
      about.split('\n').map((p, i) => (
        <Para key={p + i}>{p}</Para>
      ))
    }
  </div>
);

export default About;
