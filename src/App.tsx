import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, SignIn, SignUp } from "@/views"
import { PATHS } from "@/constants"
import { MustAuth, NoMustAuth } from "@/components"
import './styles/variables.css'
import './styles/global.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MustAuth />}>
          <Route path={PATHS.HOME} element={<Home/>} />
        </Route>
        <Route element={<NoMustAuth />}>
          <Route path={PATHS.SIGNIN} element={<SignIn />} />
          <Route path={PATHS.SIGNUP} element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
