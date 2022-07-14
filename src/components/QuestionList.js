import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, setQuestions}) {

  const questionItems = questions.map((question) => <QuestionItem question={question}/>);
  console.log(questionItems);
fetch

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItems}</ul>
      
    </section>
  );
}



export default QuestionList;
