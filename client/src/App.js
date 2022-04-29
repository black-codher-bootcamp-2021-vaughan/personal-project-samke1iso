import React, { useState, useEffect } from "react";
import Question from "./components/Question"

// SERVICES THAT CALL OUR API ENDPOINTS
// import { getAllQuestions } from "./services/quizService";

function App() {
    const [questions, setQuestions] = useState(null);


  useEffect(() => {
    fetch(`api/questions`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setQuestions(result.items);
      });
  }, []);
  return (
    <div>
      <h2> Hello

      </h2>
      <Question></Question>
    </div>
  );
}

export default App;
