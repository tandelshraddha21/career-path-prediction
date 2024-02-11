import React, { useEffect, useState } from 'react'
import {Options,Timer} from '../components';
import {useNavigate} from "react-router-dom"
import useScoreStore from '../zustand/scoreStore';

function WritingQuiz() {
    const title = "Writing Quiz";
    const category = "writing";
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate();
    const {writingScore,updateWritingScore} = useScoreStore();

    useEffect(() => {
        fetch('http://127.0.0.1:5000/get_random_questions', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ category })
        })
            .then((response) => response.json())
            .then((data) => setQuestions(data));
    }, []);

    const handleOptionChange = (event) => {
        console.log(event.target);
        setSelectedOption(event.target.value);
    };

    const checkAnswer = async () => {
        console.log({writingScore});
        if (selectedOption.length === 0) {
            alert("Please select an option");
            return
        }
        console.log(question.question_id)
        const response = await fetch('http://127.0.0.1:5000/check_answer', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                "question_id": question.question_id,
                "user_answer": selectedOption,  
                "category":category
            })
        });

        const result = await response.json();
        if(result.result === "correct"){
            setScore(score+1);
        }
        if(currentQuestion === 9){
            updateWritingScore(score);
            navigate("/informationForm");
        }else{
            setCurrentQuestion(currentQuestion+1);
        }
    }

    const question = questions[currentQuestion];

    if (questions.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className='text-5xl'>{title}</h1>
            <Timer id={currentQuestion} initialTime={60} onTimeUp={()=>{
                            setCurrentQuestion(currentQuestion+1);
            }}/>
            <div className='flex flex-col bg-slate-100 w-full rounded-xl p-10 items-start'>
                <p className='text-2xl text-justify'><span className='font-bold'>Q{currentQuestion + 1}. </span>{question.questions}</p>
                <Options selectedOption={selectedOption} handleOptionChange={handleOptionChange} options={[question.a, question.b, question.c, question.d]} />
                <button onClick={checkAnswer} className='bg-sky-500  text-white p-4 pl-8 pr-8 rounded-xl text-xl'>
                    {currentQuestion == 9 ? "Finish" : "Next"}
                </button>
            </div>
            {score}
        </div>
    )
}

export default WritingQuiz;