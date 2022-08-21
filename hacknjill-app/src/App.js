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
     description: "description 2",
     options: [
       {id: 0, text: "option 0 text", feedback: "feedback 0 text"},
       {id: 1, text: "option 1 text", feedback: "feedback 1 text"}
     ]
   }
 ];

 return (
   <div className="App">
    <h1>Hack'N Jill</h1>
    <h2>Situation Description</h2>
     {done ? (
       <div classname="End">
        {setdone(false)}
        {setCurrentSituation(1)}
       </div>
     ) : (
       <>
         <div className="Situation-Container">
          <div className="Situation-description">
              <h3>{situations[currentSituation].description}</h3> 
            </div>
          <div className="Situation-options">
            {situations[currentSituation].options.map((options) => (
                <button onClick={() => ex(options.feedback)}>{options.text}</button> 
                // ^ add onClick handler
            ))}
          </div>
          <div className="feedback" id="feedback"></div>
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