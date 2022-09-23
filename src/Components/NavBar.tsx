import { useContext } from "react"
import { Button } from "@mui/material"
import { UserContext } from "../Context/UserContext"
import { ThemeContext } from "../Context/ThemeContext"

const NavBar = () => {
  const { dark, toggleDark } = useContext(ThemeContext)
  const { logout } = useContext(UserContext)

  const SuperButton = ({ onClick, text }: any) => (
    <Button
      variant={dark ? "text" : "contained"}
      onClick={onClick}
      size="small"
    >
      {text}
    </Button>
  )

  return (
    <>
      <SuperButton
        onClick={toggleDark}
        text={dark ? "Toggle light mode" : "Toggle dark mode"}
      />
      <SuperButton onClick={logout} text="Logout" />
    </>
  )
}

export default NavBar
