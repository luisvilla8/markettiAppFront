import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, SignIn, SignUp } from "@/views"
import { PATHS, THEMES } from "@/constants"
import { MustAuth, NoMustAuth } from "@/components"
import './styles/variables.css'
import './styles/global.css'
import { useAppSelector } from "@/hooks"

function App() {

  const { theme } = useAppSelector(state => state.theme)

  return (
    <div className={`${theme === THEMES.LIGHT ? 'app' : 'app dark-mode'}`}>
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
    </div>
  )
}

export default App
