import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {InformationForm, AptitudeQuiz, CodingQuiz, WritingQuiz, MemoryTest} from "./screens"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AptitudeQuiz/>}></Route>
        <Route path='/quiz/coding' element={<CodingQuiz/>}></Route>
        <Route path='/quiz/writing' element={<WritingQuiz/>}></Route>
        <Route path='/informationForm' element={<InformationForm/>}></Route>
        <Route path='/memoryTest' element={<MemoryTest/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
