import React, { useEffect, useId, useState } from "react";
import { Options, Timer } from "../components";
import { useNavigate } from "react-router-dom";
import useScoreStore from "../zustand/scoreStore";
import NavigateQuestions from "../components/NavigateQuestions";
import QuizCategory from "../components/QuizCategory";

function AptitudeQuiz() {
  const title = "Aptitude Quiz";
  const category = "aptitude";
  const { updateAptitudeScore, updateCodingScore } = useScoreStore();
  return (
    <QuizCategory
      title={title}
      category={category}
      updateScore={updateAptitudeScore}
      nextRoute={"/quiz/coding"}
    />
  );
}

export default AptitudeQuiz;
