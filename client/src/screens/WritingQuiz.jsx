import React, { useEffect, useState } from "react";
import { Options, Timer } from "../components";
import { useNavigate } from "react-router-dom";
import useScoreStore from "../zustand/scoreStore";
import NavigateQuestions from "../components/NavigateQuestions";
import QuizCategory from "../components/QuizCategory";

function WritingQuiz() {
  const title = "Writing Quiz";
  const category = "writing";
  const nextRoute = "/informationform";
  const { updateWritingScore } = useScoreStore();

  return (
    <QuizCategory
      title={title}
      category={category}
      updateScore={updateWritingScore}
      nextRoute={nextRoute}
    />
  );
}

export default WritingQuiz;
