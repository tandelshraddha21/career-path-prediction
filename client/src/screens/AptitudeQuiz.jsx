import React, { useEffect, useId, useState } from "react";
import { Options, Timer } from "../components";
import { useNavigate } from "react-router-dom";
import useScoreStore from "../zustand/scoreStore";
import NavigateQuestions from "../components/NavigateQuestions";

function AptitudeQuiz() {
  const title = "Aptitude Quiz";
  const category = "aptitude";
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const { updateAptitudeScore, updateCodingScore } = useScoreStore();
  // const [time,setTime] = useState(10);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/get_random_questions", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ category }),
    })
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  const handleOptionChange = (event) => {
    console.log(event.target);
    setSelectedOption(event.target.value);
    setQuestions((prev) => {
      return prev.map((q, index) => {
        if (index == currentQuestion) {
          q.selectedOption = event.target.value;
        }
        return q;
      });
    });
  };

  const check_answers = async () => {
    const data = {
      answers: questions.map((item) => {
        return {
          question_id: item.question_id,
          user_answer: item.selectedOption,
        };
      }),
      category: "aptitude",
    };
    const response = await fetch("http://127.0.0.1:5000/check_answers", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const score = await response.json();
    updateAptitudeScore(score.score);
  };

  const question = questions[currentQuestion];

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full ">
      <h1 className="text-5xl mb-4">{title}</h1>
      <Timer
        id={"apti"}
        initialTime={600}
        onTimeUp={() => {
          check_answers();
        }}
      />
      <div className="flex flex-col bg-slate-100 w-full rounded-xl p-10 items-start">
        <p className="text-2xl text-justify">
          <span className="font-bold">Q{currentQuestion + 1}. </span>
          {question.questions}
        </p>
        <Options
          selectedOption={
            questions[currentQuestion]?.selectedOption || selectedOption
          }
          handleOptionChange={handleOptionChange}
          options={[question.a, question.b, question.c, question.d]}
        />
        <button
          onClick={
            currentQuestion == 9
              ? check_answers
              : (e) => setCurrentQuestion(currentQuestion + 1)
          }
          className="bg-purple-800  text-white p-4 pl-8 pr-8 rounded-xl text-xl"
        >
          {currentQuestion == 9 ? "Finish" : "Next"}
        </button>
      </div>
      <NavigateQuestions
        questions={questions}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
    </div>
  );
}

export default AptitudeQuiz;
