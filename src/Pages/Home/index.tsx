import "../../App.css"
import ToggleDarkMode from "../../Components/ToggleDarkMode"
import { UserContext } from "../../Context/UserContext"
import { useContext } from "react"

const Home = () => {
  const { isAuthenticated } = useContext(UserContext)
  console.log(isAuthenticated)
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
          Learn Formik
        </a>
      </header>
    </div>
  )
}

export default Home
