import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {


  return (
    <div>
      <h1>Welcome to the Trivia Challenge!</h1>
      <h2>You will be presented with 10 Ture or False questions.</h2>
      <h2>Can you score 100%?</h2>
      <Link to="/quiz" style={{backgroundColor: '#2196f3', padding: '15px' , color: 'white', textDecoration: 'none'}}>BEGIN</Link>
    </div>
  );
}