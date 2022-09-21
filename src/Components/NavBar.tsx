import { MouseEvent, useContext } from "react"
import { useThemeContext } from "../Context/ThemeContext"
import { Button } from "@mui/material"
import UserContext from "../Context/UserContext"

const NavBar = () => {
  const { dark, toggleDark } = useThemeContext()
  const { logout } = useContext(UserContext)

  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (toggleDark) toggleDark()
  }

  return (
    <>
      <Button variant="outlined" onClick={handleOnClick}>
        {dark ? "Toggle light mode" : "Toggle dark mode"}
      </Button>
      <Button variant="contained" type="submit" onClick={logout}>
        Logout
      </Button>
    </>
  )
}

export default NavBar
