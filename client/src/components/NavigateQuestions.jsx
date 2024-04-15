import React from "react";

const NavigateQuestions = ({
  questions,
  setCurrentQuestion,
  currentQuestion,
}) => {
  return (
    <div className="w-full flex flex-row flex-wrap gap-3 items-center justify-center">
      {questions.map((question, index) => (
        <div
          key={index}
          onClick={(e) => setCurrentQuestion(index)}
          className={`cursor-pointer border border-1 border-purple-500 w-10 h-10 p-2 ${
            currentQuestion == index && "bg-purple-800 text-white"
          }`}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default NavigateQuestions;
