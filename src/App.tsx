import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SignIn, SignUp } from "@/views"
import { PATHS } from "@/constants"
import './styles/variables.css'
import './styles/global.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.SIGNIN} element={<SignIn />} />          
        <Route path={PATHS.SIGNIN} element={<SignIn />} />          
        <Route path={PATHS.SIGNUP} element={<SignUp />} />          
      </Routes>
    </BrowserRouter>
  )
}

export default App
