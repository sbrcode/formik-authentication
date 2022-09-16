import "./App.css"
import Home from "./Pages/Home"
import LoginPage from "./Pages/LoginPage"
import { UserContext, UserProvider } from "./Context/UserContext"
import { ThemeProvider } from "./Context/ThemeContext"
import { useContext } from "react"

const App = () => {
  const { user, isAuthenticated } = useContext(UserContext)
  console.log(isAuthenticated)

  return (
    <UserProvider>
      <ThemeProvider>
        {user.email && user.password ? <Home /> : <LoginPage />}
      </ThemeProvider>
    </UserProvider>
  )
}

export default App
