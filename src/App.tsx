import { useContext } from "react"
import Home from "./Pages/Home"
import LoginPage from "./Pages/LoginPage"
import NavBar from "./Components/NavBar"
import { UserContext } from "./Context/UserContext"
import { ThemeContext } from "./Context/ThemeContext"
import "./App.css"

const App = () => {
  const { isAuthenticated } = useContext(UserContext)
  const { dark } = useContext(ThemeContext)

  return isAuthenticated ? (
    <>
      <nav className={dark ? "App-header-dark" : "App-header"}>
        <NavBar />
      </nav>
      <main className={dark ? "App-dark" : "App"}>
        <Home />
      </main>
    </>
  ) : (
    <LoginPage />
  )
}

export default App
