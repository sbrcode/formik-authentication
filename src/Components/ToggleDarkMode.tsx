import { MouseEvent } from "react"
import { useThemeContext } from "../Context/ThemeContext"

const ToggleDarkMode = () => {
  const { dark, toggleDark } = useThemeContext()

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (toggleDark) toggleDark()
  }

  return (
    <>
      <h1>{dark ? "🌙" : "🌞"}</h1>
      <button onClick={handleOnClick}>Toggle dark mode</button>
    </>
  )
}

export default ToggleDarkMode
