import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  InformationForm,
  AptitudeQuiz,
  CodingQuiz,
  WritingQuiz,
  MemoryTest,
} from "./screens";
import Certificate from "./screens/Certificate";
import { Input } from "./components/Input";
import Home from "./screens/Home";
import useScoreStore from "./zustand/scoreStore";

function App() {
  const { userData, updateUserData } = useScoreStore();
  return (
    <div className="w-full h-full flex flex-row">
      <div className="flex flex-col justify-center gap-4 w-1/3  bg-purple-950 p-10">
        <h1 className="text-white text-3xl text-start mb-4">
          Your Information
        </h1>
        <Input
          value={userData.fullName}
          label={"Full Name"}
          placeholder={"You Name"}
          onChange={(e) =>
            updateUserData({ ...userData, fullName: e.target.value })
          }
        />
        <Input
          value={userData.contact}
          label={"Contact Number"}
          placeholder={"Contact Number"}
          onChange={(e) =>
            updateUserData({ ...userData, contact: e.target.value })
          }
        />
        <Input
          value={userData.email}
          label={"Email Address"}
          onChange={(e) =>
            updateUserData({ ...userData, email: e.target.value })
          }
          type={"email"}
          placeholder={"abc@bbb.com"}
        />
      </div>
      <div className="flex text-center w-full py-10 px-40 justify-center items-center overflow-scroll">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz/aptitude" element={<AptitudeQuiz />}></Route>
            <Route path="/quiz/coding" element={<CodingQuiz />}></Route>
            <Route path="/memoryTest" element={<MemoryTest />} />
            <Route path="/quiz/writing" element={<WritingQuiz />}></Route>
            <Route path="/certificate" element={<Certificate />}></Route>
            <Route
              path="/informationForm"
              element={<InformationForm />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
