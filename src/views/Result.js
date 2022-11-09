import React from 'react';
import { Link } from 'react-router-dom';

export default function Result(data) {
  const score = data.score;
  const questions = data.questions;
  const answers = data.answers;
  const navigate = data.navigate;
  
  const tryAgain = () => {
    navigate('/');
    window.location.reload(false);
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h2>Your Scored</h2>
      <h3>{score} / 10</h3>
      {questions.map((ele, index) => {
        return(
          <div key={index}>
              <h4>{ele.question}</h4>
              <h4>Correct Answer: {ele.correct_answer}</h4>
              <h4 style={{color: ele.correct_answer === answers[index] ? 'blue' : 'red'}}>Your Answer: {answers[index]}</h4>
          </div>
        )
      })}
      <button style={{backgroundColor: '#2196f3', padding: '15px' , color: 'white', border: 'none', cursor: 'pointer'}} onClick={tryAgain}>TRY AGAIN</button>
    </div>
  );
}