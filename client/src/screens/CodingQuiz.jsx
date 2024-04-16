import React, { useEffect, useState } from "react";
import { Options, Timer } from "../components";
import { useNavigate } from "react-router-dom";
import useScoreStore from "../zustand/scoreStore";
import NavigateQuestions from "../components/NavigateQuestions";
import QuizCategory from "../components/QuizCategory";

function CodingQuiz() {
  const title = "Coding Quiz";
  const category = "coding";
  const { updateCodingScore } = useScoreStore();
  const nextRoute = "/memoryTest";

  return (
    <QuizCategory
      title={title}
      category={category}
      updateScore={updateCodingScore}
      nextRoute={nextRoute}
    />
  );
}

export default CodingQuiz;
