// import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { UserProvider } from "./Context/UserContext"
import { ThemeProvider } from "./Context/ThemeContext"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <UserProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </UserProvider>
)
