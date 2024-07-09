import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {WordPage} from "./pages/WordPage.tsx";
import {WordForm} from "./pages/WordPageForm.tsx";
import {UploadFile} from "./pages/UploadFile.tsx"
import {NavBar} from "./components/NavBar.tsx";

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path="/documents" element= {<WordPage/>}/>
        <Route path="/document-create" element= {<WordForm/>}/>
          <Route path="/import-document" element={<UploadFile/>}/>
          <Route path="/" element={<Navigate to = "/documents"/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
