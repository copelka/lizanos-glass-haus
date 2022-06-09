import React from 'react';
import { welcome } from '../text/text.json';
import { Para } from '../styles/styles.js';

const Welcome = () => (
  <div>
    {
      welcome.split('\n').map((p, i) => (
        <Para key={p + i}>{p}</Para>
      ))
    }
  </div>
);

export default Welcome;
