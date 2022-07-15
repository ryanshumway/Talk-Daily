import React from "react";
import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  padding: 20px 24px;
  border-radius: 50px;
  transition: ease-in-out 0.2s all;
  background: linear-gradient(
    90deg,
    hsla(305, 48%, 82%, 1) 0%,
    hsla(208, 100%, 80%, 1) 50%,
    hsla(162, 69%, 69%, 1) 100%
  );
  background-position: left;
  background-size: 200%;
  color: black;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  &:hover {
    scale: 1.03;
    background-position: right;
  }
  &:active {
    scale: 1;
    background: linear-gradient(90deg, hsla(208, 100%, 72%, 1) 0%, hsla(162, 69%, 60%, 1) 100%);
;
  }
`;

const StyledHeaderText = styled.h4`
  max-width: 600px;
  font-weight: 500;
  font-size: 1.75em;
  margin: 0;
`;

const StyledWrapper = styled.div`
  background-color: #dfece8;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #4e665f;
  padding: 0px 24px;
`;

const StyledQuestion = styled.h1`
  padding: 88px 24px;
  max-width: 800px;
  font-weight: 800;
  font-size: 2.5em;
  border-top: 2px solid #4e665f;
  border-bottom: 2px solid #4e665f;
  margin: 48px 0px;
`;

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
    "Do you have any sexual fantasies? What are they?",
    "How would you spend $1,000,000 if you suddendly had it?",
    "If you didn't have to work for money, how would you spend your time?",
    "What are your odd quirks, your idiosyncrasies?",
    "What was the hardest life lesson you’ve learned?",
    "What piece of advice would you give yourself 5 years ago?",
    "How do you want to be different in the next 5 years?",
    "How do you feel about kids, do you want kids?",
    "What's something you want more of in our sex life?",
    "Do you have a favorite sexual memory of us?",
    "What’s your favourite place to be kissed?",
    "How well do you think we handle disagreements?",
    "When we have conflict, how do I treat you?",
    "How do you feel about what's going on in the world today?",
    "Do you think there is ever a situation where it’s ok to lie?",
    "How do you feel about using pornography in our relationship?",
    "If you had the ability to change something in the world, what would it be? (why?)",
    "What are two things you like about yourself?",
    "If you could change anything about our relationship, what would it be and why?",
    "How do you feel about your in-laws (my family)?",
    "Be honest, is there anything I could do to make this relationship better for you?",
    "Which would you like more—to be in control, or to be dominated?",
    "Are we a positive influence on each other? How so?",
    "Would you rather skip using social media for a week or skip brushing your teeth for a week?",
    "Would you rather wear only one piece of clothing (shirt, pants, skirt..) for the rest of your life or eat only one food for the rest of your life?",
    "Would you rather be a dog or a cat?",
    "What in your life are you most grateful for?",
    "Has there been a time where you needed reassurance from me, but I failed to give it?",
    "Do you believe in having a purpose on this earth? If so, what is it? If not, why not?",
    "What was the last thing you did that you genuinely got excited at?",
    "What are your life dreams / goals?",
    "If you could wake up tomorrow with one quality or talent, what would it be and why?",
    "If a psychic could tell your future, what would you want to know?",
    "What are deal breakers for our relationship?",
    "What was the most difficult decision you took in your life?",
    "What is(or are) your love language(s)?",
    "How close are you to your family? Do you feel that you had a loving childhood?",
    "Are you afraid that with age, we might grow apart in the relationship?",
    "How have we changed since we've been together?",
    "How do you feel about gay rights and gay relationships?",
    "Is being a parent more challenging or more straightforward than you thought?",
    "Do you believe in God? How do you explain it?",
    "Would you ever leave me for someone who makes more money than I do?",
    "What are your turn-ons? Turn-offs?",
    "What is your biggest turn-on?",
    "What has been an extremely embarrassing moment in your life?",
    "Tell me your version of the start of our relationship",
    "Do you consider your relationship with your mother to be strong?",
    "What dreams do you have when it comes to spending the future together?",
    "Have you ever been skinny dipping?",
    "Do you have a rule you would never break?",
    "Who do you think shows more emotion between us?",
    "Describe our relationship in one word",
    "What romantic thing that I do, do you like the most?",
    "How can I be more romantic for you?",
    "Describe me in one word?",
    "What would an erotic vacation look like for you?",
    "What's a sex position you’d like to try?",
    "Do you think celebrating Valentine’s Day is corny?",
    "If you could recreate a special memory, what would it be?",
    "What is your favorite memory from your childhood?",
    "How did your parents disciple when you were young?",
    "How did your parents parent? What would you do differently?",
    "Do I look better in photographs, or reality?",
    "What do you like to do when you're not working?",
    "How would you spend a rainy day?",
    "If you could go back and live in a different era, when would it be and where?",
    "Do you think you show your love enough to me?",
    "Do I listen enough to you?",
    "What are your pet peeves?",
    "Does my family do anything that drives you crazy?",
    "What was your childhood like?",
    "Are you always open and honest with me?",
    "Have you ever struggled with an addiction?",
    "When did you know you loved me?",
    "What memory always sticks in your head about how we first met?",
    "What has been the most valuable lesson you’ve learned from your parents?",
    "Did you have an allowance when you were young?",
    "When did you start working?",
    "What is your dream vacation?",
    "Do you consider yourself more of a spender, saver, or a little of both?",
    "How do you parents handle finances? What do you want to do differently?",
    "What are you stressed about and how can I help?",
    "Is there anyone in your life that makes you unhappy?",
    "How do you feel about your job?",
    "If you could switch careers, what would you do instead?",
    "Are you comfortable talking about money?",
    "Do you budget your money?",
    "Are you currently in debt in any way?",
    "Do you have any other financial obligations that I don't know about?",
    "If we got married, do we share each others debts?",
    "Who should handle the budget and finances between us?",
    "What budget rules do we have in place? How are those working?",
    "What was your mom and dad's roles within the home?",
    "How involved were your mom and dad as parents?",
    "Did you ever see your parents fight or get angry?",
    "How do your parents expect us to spend the holidays?",
    "Have I recently done anything to hurt your feelings?",
    "What needs does our marriage have that need to be better handled?",
    "Do you think our intimacy needs to be worked on?",
    "Do you think we spend too little, just enough, or too much time together?",
    "Do you think we spend too much money?",
    "What's your favorite meal?",
    "On a scale of 1 to 10, how would you rate me as a partner and as a parent? What would help my current score improve?",
    "Do you feel safe talking to me about uncomfortable topics?",
    "Is there anything I do that causes tension or makes you feel isolated?",
    "When you hear the word “retirement,” what do you picture?",
    "What motto do you live by?",
    "Do I have a hobby or quirk that you find annoying?",
    "How would you change our wedding day?",
    "What is your favorite part about being married?",
    "Between your parents, which of them do you think you’re most like?",
    "What is something you never meant to do but worked out well for you in the end anyway?",
    "Do you prefer to read, watch tv/movies, or be on social media?",
    "How do you create spiritual time?",
    "Do you have a hero you grew up admiring?",
    "Do you have something you wish we did differently in bed?",
    "Do you have an idea for a date that we haven’t tried yet?",
    "Are there any goals you want to set for our marriage?",
    "Is there any achievement or milestone you want to splurge on a celebration for?",
    "Is there a home renovation or remodeling project you want to start?",
    "Would you like to go on a cross-country road trip?",
    "Do you like to try new restaurants, or stick with your favorites?",
    "Is there a new activity or hobby that you want to try together?",
  ];

  const selectQuestion =
    questionsArray[Math.floor(Math.random() * questionsArray.length)];
  function handleClick() {
    setQuestion(
      (prevQuestion) =>
        questionsArray[Math.floor(Math.random() * questionsArray.length)]
    );
  }

  return (
    <div className="App">
      <StyledWrapper>
        <StyledHeaderText>Talk Daily Question</StyledHeaderText>
        <StyledQuestion>{selectQuestion}</StyledQuestion>
        <StyledButton onClick={handleClick}>Different Question</StyledButton>
      </StyledWrapper>
    </div>
  );
}

export default App;
