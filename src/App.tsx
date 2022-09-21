import "./App.css"
import Home from "./Pages/Home"
import LoginPage from "./Pages/LoginPage"
import UserContext from "./Context/UserContext"

import { useContext } from "react"

const App = () => {
  const { isAuthenticated } = useContext(UserContext)

  return isAuthenticated ? <Home /> : <LoginPage />
}

export default App
