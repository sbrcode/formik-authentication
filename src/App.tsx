import "./App.css"
import Home from "./Pages/Home"
import LoginPage from "./Pages/LoginPage"
import { UserProvider, useUserContext } from "./Context/UserContext"
import { ThemeProvider } from "./Context/ThemeContext"
import ToggleDarkMode from "./Components/ToggleDarkMode"

const App = () => {
  const { user, createUser } = useUserContext()
  console.log(user)
  return (
    <UserProvider>
      <ThemeProvider>
        <ToggleDarkMode />
        {user.isAuthenticated && user.email && user.password ? (
          <Home />
        ) : (
          <LoginPage />
        )}
      </ThemeProvider>
    </UserProvider>
  )
}

export default App
