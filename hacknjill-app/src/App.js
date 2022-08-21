//import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";


function App() {

 //Properties
 const [currentSituation, setCurrentSituation] = useState(0);
 const [done, setdone] = useState(false);

 const situations = [
   {
     description: `You are watching over a group of kids who are playing at a park’s playground. 
                    You see one of the little boys crying by a tree. What action should you take?`,
     options: [
      {
        id: 0, 
        text: "Tell the little boy to man-up, reprimand him for being weak and pat him twice on the head.", 
        feedback: `Not quite right. The little boy sucks in his tears but you see him walking toward one of his friends 
                  and pushing him hard and saying, “You’re a boy, don’t cry!” Unknown to you, earlier on the boy 
                  and a few of his friends were playing tag. He was then pushed a little too hard by his best friend, 
                  which caused him to trip and fall over. The boy was both emotionally and physically hurt. `
      },
      {
        id: 1, 
        text: `Allow the little boy to tell you what is wrong and what happened`, 
        feedback: ` Great choice, Unknown to you, the little boy was actually hurt. He was playing tag with his friends 
                    and his best friend pushed him a little too hard. The little boy tripped over and was hurt both 
                    emotionally and physically.
                    The boy left knowing that it is okay to cry, and it does not matter what gender you are because 
                    we all have emotions that we would want to express/show sometimes.`
      }
     ]
   },
   {
    description: `While shopping at your favorite mall with a friend, you enter a clothing store and are welcomed by one of the 
                  workers there. Your friend stops and passes a comment to the person saying,” You don’t look like a real man or 
                  woman, which of the two are you? Are you even supposed to be working here”. What should be your response?`,
    options: [
      {
        id: 0, 
        text: "Speak up and raise awareness on gender equity and inclusiveness.", 
        feedback: `WONDERFUL! You tell your friend about how one does not have to just choose between being either male or female 
                  and no two people are exactly alike. Gender is a unique and personal experience, and many gender identity terms aim 
                  to represent part of those experiences. Furthermore, one’s gender identity does not affect how they will work at the 
                  store. In the end, your friend learns something new about gender and inclusiveness, and you see the worker’s smile a 
                  little because they do not feel the need to explain themselves anymore. That’s one more person made aware of gender 
                  & inclusiveness, and one less person feeling the need to explain their gender identity.`
      },
      {
        id: 1, 
        text: "Silently agree, shy away from the conversation and head towards the shoe section.", 
        feedback: `As soon as you walk away, you notice that the employee is not very comfortable trying to explain their gender to your 
        friend. In the middle of the explanation, your friend just walks away as well and says, “I will come to this store another time.” 
        This ends up putting the employee in a tough position and you just passed an opportunity to educate or sensitize your friend about 
        gender and inclusiveness. Gender is a unique and personal experience, and many gender identity terms aim to represent part of those
         experiences. Furthermore, one’s gender identity does not affect how they will work at the store.`
      }
    ]
}
 ];

 const nextClick = () => {
    if (currentSituation + 1 < situations.length) {
      setCurrentSituation(currentSituation + 1);
      document.getElementById("feedback").innerHTML = "";
    } else {
      setdone(true);
    }
 }

 return (
   <div className="App">
    <h1>Hack'N Jill</h1>
    <h2 id="situation-description">Situation Description</h2>
     {done ? (
        <div className='Situation-Container'>
          {/* Ending message */}
    
          {/* Make it look pretty */}
          {document.getElementById("situation-description").innerHTML = ""}
          <h2>Thank you for your time!</h2>
          <h2>We hope you have learned something about gender equlity and inclusivity and how it can effect people</h2>
          <h2>For more info, go to https://www.glaad.org/reference/trans-terms
            https://www.edutopia.org/blog/gender-equity-classroom-rebecca-alber</h2>
        </div>
        
     ) : (
       <>
         <div className="Situation-Container">
          <div className="Situation-description">
              <h3>{situations[currentSituation].description}</h3> 
            </div>
          <div className="Situation-options">
            {situations[currentSituation].options.map((options) => (
                <button className="option-button" onClick={() => ex(options.feedback)}>{options.text}</button> 
            ))}
          </div>
          <div className="feedback" id="feedback"></div>
          <div ClassName="NextButton">
            <button className='Next=button' onClick={nextClick}>Next</button>
          </div>
         </div> 
       </>
     )}
   </div>
 );
}

export default App;

function ex(props) {
  document.getElementById("feedback").innerHTML = props;
}