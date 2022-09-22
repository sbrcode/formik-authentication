import { useContext } from "react"
import { Button } from "@mui/material"
import { UserContext } from "../Context/UserContext"
import { ThemeContext } from "../Context/ThemeContext"

const NavBar = () => {
  const { dark, toggleDark } = useContext(ThemeContext)
  const { logout } = useContext(UserContext)

  return (
    <>
      <Button variant="outlined" onClick={toggleDark}>
        {dark ? "Toggle light mode" : "Toggle dark mode"}
      </Button>
      <Button variant="contained" type="submit" onClick={logout}>
        Logout
      </Button>
    </>
  )
}

export default NavBar
