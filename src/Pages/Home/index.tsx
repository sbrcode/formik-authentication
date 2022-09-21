import "../../App.css"
import ToggleDarkMode from "../../Components/ToggleDarkMode"
import UserContext from "../../Context/UserContext"
import { useContext } from "react"

const Home = () => {
  const { isAuthenticated, logout } = useContext(UserContext)

  return (
    <div className="App">
      <header className="App-header">
        <ToggleDarkMode />
        <a
          className="App-link"
          href="https://formik.org/docs/overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          {isAuthenticated ? "Learn Formik" : "fezkljflkezjlf"}
        </a>
        <button type="submit" onClick={logout}>
          Logout
        </button>
      </header>
    </div>
  )
}

export default Home
