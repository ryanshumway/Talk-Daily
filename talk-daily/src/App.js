import React from "react";
import { useState } from "react";
import "./App.css";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding: 12px 20px;
  border-radius: 50px;
  transition: ease-in-out .2s all;
  background-color: white;
  color: black;
  font-weight: 800;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  &:hover {
    scale: 1.05;
  }
  &:active {
    scale: 1.0;
  }
`

const StyledQuestion = styled.h1`
  padding: 88px 24px;
  max-width: 600px;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
`

function App() {
  const [question, setQuestion] = useState();

  const questionsArray = [
    "What kind of parent do you think you'd be?",
    "The two of us are hitting the great outdoors.. what would you prefer to spend the day doing?",
    "How would you want to spend a special day with each other?",
    "What has been your favorite part of the year?",
    "What was your first impression of me?",
    "Have you been in a toxic relationship for a long time?",
    "What are the biggest strength of our relationship?",
    "How do we balance each other?",
    "What’s something you want to do, but haven’t gathered the courage yet?",
    "How do you express anger?",
    "Where do you want to travel to?",
    "What would you do if you won $10,000 now?",
    "How would you spend $1,000,000 if you suddendly had it?",
    "If you didn't have to work for money, how would you spend your time?",
    "What are your odd quirks, your idiosyncrasies?",
    "What was the hardest life lesson you’ve learned?",
    "What piece of advice would you give yourself 5 years ago?",
    "How do you want to be different in the next 5 years?",
    "How do you feel about kids, do you want kids?",
    "Are we a positive influence on each other? How so?",
    "Would you rather skip using social media for a week or skip brushing your teeth for a week?",
    "Would you rather wear only one piece of clothing (shirt, pants, skirt..) for the rest of your life or eat only one food for the rest of your life?",
    "Would you rather be a dog or a cat?",
    "What was the most difficult decision you took in your life?",
    "What is(or are) your love language(s)?",
    "How do you feel about gay rights and gay relationships?",
    "Do you believe in God? How do you explain it?",
    "Would you ever leave me for someone who makes more money than I do?",
    "What are your turn-ons? Turn-offs?",
    "Do you think celebrating Valentine’s Day is corny?",
    "If you could recreate a special memory, what would it be?",
    "What is your favorite memory from your childhood?",
    "How did your parents disciple when you were young?",
    "How did your parents parent? What would you do differently?",
    "Do I look better in photographs, or reality?",
    "What do you like to do when you're not working?",
    "How would you spend a rainy day?",

  ];

  const selectQuestion = questionsArray[Math.floor(Math.random() * questionsArray.length)];
  function handleClick() {
    setQuestion(prevQuestion => questionsArray[Math.floor(Math.random() * questionsArray.length)])
  }

  return (
    <div className="App">
      <header className="App-header">
        <h4>Today's Question</h4>
        <StyledQuestion>{selectQuestion}</StyledQuestion>
        <StyledButton onClick={handleClick}>Different Question</StyledButton>
      </header>
    </div>
  );
}

export default App;
