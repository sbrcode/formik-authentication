import {
  createContext,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react"

export interface IUser {
  email: string
  password: string
}

export const defaultUserDetails = {
  email: "",
  password: "",
}

interface User {
  user: IUser
  isAuthenticated: boolean
  toggleAuthent: () => void
  login: (values: IUser | SetStateAction<any>) => void
  logout: () => void
}

const defaultUser = {
  user: defaultUserDetails,
  isAuthenticated: false,
  toggleAuthent: () => {},
  login: () => {},
  logout: () => {},
}

export const UserContext = createContext<User>(defaultUser)

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState(defaultUserDetails)
  const [isAuthenticated, ToggleAuthenticated] = useState(false)

  const login = (val: SetStateAction<{ email: string; password: string }>) => {
    setUser(val)
  }

  const toggleAuthent = () => {
    ToggleAuthenticated(!isAuthenticated)
  }

  const logout = () => {
    setUser(defaultUserDetails)
    ToggleAuthenticated(false)
  }

  return (
    <UserContext.Provider
      value={{ user, isAuthenticated, login, logout, toggleAuthent }}
    >
      {children}
    </UserContext.Provider>
  )
}
