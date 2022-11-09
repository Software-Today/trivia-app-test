import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { render } from '@testing-library/react';
import Result from './Result';

export default function Quez() {
  const navigate = useNavigate();
  const api = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';
  const [questions, setQuestion] = React.useState(null);
  const [sel_quiz, setSelQuiz] = React.useState(null);
  const [index, setIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [display, setDisplay] = React.useState('');

  React.useEffect(() => {
    axios.get(api).then((response) => {
      setQuestion(response.data.results);
      setSelQuiz(response.data.results[0]);
    });
  }, []);

  const ClickTrue = () => {
    answers[index] = 'True';
    setAnswers(answers);
    if(sel_quiz.correct_answer === 'True') setScore(score + 1);
    setIndex(index + 1);
    setSelQuiz(questions[index]);
    if (index === 9) {
      setIndex(0);
      setDisplay('none');
      render(<Result questions={questions} answers={answers} score={score} navigate={navigate}/>)
    }
  }

  const ClickFalse = () => {
    answers[index] = 'False';
    setAnswers(answers);
    if(sel_quiz.correct_answer === 'False') setScore(score + 1);
    setIndex(index + 1);
    setSelQuiz(questions[index + 1]);
    if(index === 9) {
      setIndex(0);
      setDisplay('none');
      render(<Result questions={questions} answers={answers} score={score}/>)
    }
  }


  return (
    <div style={{margin: '100px', display: display}}>
      <h2>{sel_quiz? sel_quiz.category.trim() : ''}</h2>
      <h3>{sel_quiz? sel_quiz.question.trim() : ''}</h3>
      <button style={{border: 'none', width: '100px', cursor: 'pointer', height: '50px', color: 'white', marginRight: '30px', backgroundColor: '#2196f3'}} onClick={ClickTrue}>True</button>
      <button style={{border: 'none', width: '100px', cursor: 'pointer', height: '50px', color: 'white', backgroundColor: 'red'}} onClick={ClickFalse}>False</button>
      <h4>{index + 1} of 10</h4>
    </div>
  );
}