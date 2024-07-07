import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {WordPage} from "./pages/WordPage.tsx";
import {WordForm} from "./pages/WordPageForm.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/documents" element= {<WordPage/>}/>
        <Route path="/document-create" element= {<WordForm/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
