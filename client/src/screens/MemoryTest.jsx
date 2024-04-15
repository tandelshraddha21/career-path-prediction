import { useEffect, useState } from "react";
import useScoreStore from "../zustand/scoreStore";
import { SequenceInput } from "../components";
import { useNavigate } from "react-router-dom";

const MemoryTest = () => {
  const navigate = useNavigate();
  const { memoryScore, updateMemoryScore } = useScoreStore();
  const [sequenceList, setSequenceList] = useState([]);
  const [currentSequence, setCurrentSequence] = useState(-1);
  const [show, setShow] = useState(false);
  const [showNext, setShowNext] = useState(true);
  const [guess, setGuess] = useState(false);
  const [enteredSequence, setEnteredSequence] = useState("");

  const generateRandomSequence = () => {
    const randomSequence = Math.floor(Math.random() * 90000) + 10000;
    return randomSequence;
  };

  useEffect(() => {
    let list = [];
    for (let i = 0; i < 10; i++) {
      list.push(generateRandomSequence());
    }
    console.log(list);
    setSequenceList(list);
  }, []);

  useEffect(() => {
    if (show) {
      let time = 0;
      const interval = setInterval(() => {
        if (time === 1) {
          setShow(false);
          setShowNext(false);
          setGuess(true);
          time = 0;
          clearInterval(interval);
        }
        time++;
      }, 500);
    }
  }, [currentSequence]);

  useEffect(() => {
    if (enteredSequence.length === 5) {
      handleCheckAnswer();
      setEnteredSequence("");
    }
  }, [enteredSequence]);

  const handleNext = () => {
    setCurrentSequence(currentSequence + 1);
    setShow(true);
    setShowNext(false);
    console.log(currentSequence);
  };

  const handleCheckAnswer = () => {
    if (parseInt(enteredSequence) === sequenceList[currentSequence]) {
      updateMemoryScore(memoryScore + 1);
    }
    if (currentSequence === 9) {
      navigate("/quiz/writing");
    } else {
      setShow(false);
      setGuess(false);
      setShowNext(true);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className="text-5xl mb-2 uppercase font-bold">Memory Test</h1>

      {currentSequence === -1 && (
        <div className="max-w-2xl p-6 bg-white rounded-md shadow-md">
          <h1 className="text-2xl font-bold mb-4">Memory Game Instructions</h1>

          <ul className="text-justify list-disc pl-6">
            <li className="mb-2">
              A sequence of digits will be displayed for 2 seconds. Memorize the
              sequence during this time.
            </li>
            <li className="mb-2">
              After 2 seconds, the sequence will disappear, and an input field
              will appear.
            </li>
            <li className="mb-2">
              Enter the remembered sequence into the input field.
            </li>
            <li className="mb-2">
              If the entered sequence is correct, your score will increase by 1.
            </li>
            <li className="mb-2">
              Click the "Next" button to proceed to the next round.
            </li>
            <li className="mb-2">
              The game consists of 10 rounds with different sequences.
            </li>
            <li className="mb-2">Have fun and challenge your memory skills!</li>
          </ul>
        </div>
      )}

      {currentSequence !== -1 && !showNext && (
        <h2 className="text-xl font-semibold">
          Question {currentSequence + 1} of 10
        </h2>
      )}

      {show ? (
        <>
          <h1 className="text-2xl">{sequenceList[currentSequence]}</h1>
        </>
      ) : null}

      {showNext && (
        <button
          onClick={handleNext}
          className="bg-purple-800 text-white rounded-md py-2 px-4"
        >
          {currentSequence === -1 ? "Start" : "Next"}
        </button>
      )}

      {guess && (
        <div>
          <SequenceInput
            value={enteredSequence}
            setValue={setEnteredSequence}
          />
          {/* <button onClick={handleCheckAnswer} className='bg-blue-700 text-white rounded-md py-2 px-4'>Check</button> */}
        </div>
      )}
    </div>
  );
};

export default MemoryTest;
