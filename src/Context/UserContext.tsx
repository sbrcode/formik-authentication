import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react"

interface IUser {
  username?: string
  email: string
  password: string
  isAuthenticated: boolean
}

interface User {
  user: IUser
  createUser?: () => void
}

const defaultState = {
  user: {
    username: "",
    email: "",
    password: "",
    isAuthenticated: false,
  },
}

const UserContext = createContext<User>(defaultState)

export const useUserContext = () => useContext(UserContext)

export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState(defaultState.user)

  const createUser = () => {
    setUser(user)
  }

  return (
    <UserContext.Provider
      value={{
        user,
        createUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
