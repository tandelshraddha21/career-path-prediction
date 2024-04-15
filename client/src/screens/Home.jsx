import React from "react";
import career_1 from "../assets/career_1.png";
import career_Outline_1 from "../assets/Career__Outline_1.png";
import career_Isometric_1 from "../assets/Career__Isometric_1.png";
import { useNavigate } from "react-router-dom";
import useScoreStore from "../zustand/scoreStore";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-4xl  font-bold">👨‍💻 Career Prediction App 👨‍💻</h1>
      <div className="flex flex-row gap-2 justify-center items-center">
        <img className="w-48 object-fit-contain " src={career_1} />
        <img className="w-48 object-fit-contain " src={career_Outline_1} />
        <img className="w-48 object-fit-contain " src={career_Isometric_1} />
      </div>
      <h1 className="text-2xl">Your Friendly Career Advisor</h1>
      <button
        onClick={(e) => {
          navigate("/quiz/aptitude");
        }}
        className="bg-purple-800 w-fi text-white rounded-md py-2 px-6 mt-8"
      >
        Start
      </button>
    </div>
  );
};

export default Home;
