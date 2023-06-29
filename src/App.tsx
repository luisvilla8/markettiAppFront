import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CreateSurvey, Home, Logout, SignIn, SignUp } from "@/views"
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
            <Route path={PATHS.HOME.path} element={<Home/>} />
            <Route path={PATHS.CREATE_SURVEY.path} element={<CreateSurvey/>} />
            <Route path={PATHS.LOGOUT.path} element={<Logout/>} />
          </Route>
          <Route element={<NoMustAuth />}>
            <Route path={PATHS.SIGNIN.path} element={<SignIn />} />
            <Route path={PATHS.SIGNUP.path} element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
