import React from 'react';


function Question({ questions }) {
    console.log("questions", questions)
  return (
    <div>
      <h2> this is question</h2>
       {questions && questions.map((question) => <div key={question._id}>{question.question} </div>)} 
        

    </div>
  );
}


export default Question; 