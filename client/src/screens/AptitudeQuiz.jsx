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
  };

  const checkAnswer = async () => {
    if (selectedOption.length === 0) {
      alert("Please select an option");
      return;
    }
    console.log(question.question_id);
    const response = await fetch("http://127.0.0.1:5000/check_answer", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        question_id: question.question_id,
        user_answer: selectedOption,
        category: category,
      }),
    });

    const result = await response.json();
    if (result.result === "correct") {
      setScore(score + 1);
    }
    if (currentQuestion === 9) {
      updateAptitudeScore(score);
      navigate("/quiz/coding");
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
    setTime(10);
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
          //   setCurrentQuestion(currentQuestion + 1);
          updateAptitudeScore(score);
          navigate("/quiz/coding");
        }}
      />
      <div className="flex flex-col bg-slate-100 w-full rounded-xl p-10 items-start">
        <p className="text-2xl text-justify">
          <span className="font-bold">Q{currentQuestion + 1}. </span>
          {question.questions}
        </p>
        <Options
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
          options={[question.a, question.b, question.c, question.d]}
        />
        <button
          onClick={checkAnswer}
          className="bg-purple-800  text-white p-4 pl-8 pr-8 rounded-xl text-xl"
        >
          {currentQuestion == 9 ? "Finish" : "Next"}
        </button>
      </div>
      {/* <div className="w-full flex flex-row flex-wrap gap-3 items-center justify-center">
        {questions.map((question, index) => (
          <div
            onClick={(e) => setCurrentQuestion(index)}
            className={`cursor-pointer border border-1 border-purple-500 w-10 h-10 p-2 ${
              currentQuestion == index && "bg-purple-800 text-white"
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div> */}
      <NavigateQuestions
        questions={questions}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
      />
    </div>
  );
}

export default AptitudeQuiz;
