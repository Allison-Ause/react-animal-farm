import React from 'react';
import './Main.css';
import background from '../../background.png';
import '../../data.js';
import Animal from '../Animal/Animal';

export default function Main() {
  return <main style={{ backgroundImage: `url(${background})` }}></main>;
}
