import {
  createContext,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react"

export interface IUser {
  username?: string
  email: string
  password: string
}

const defaultUserDetails = {
  username: "",
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

const UserContext = createContext<User>(defaultUser)

const UserProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState(defaultUserDetails)
  const [username, setUsername] = useState(defaultUserDetails.username)
  const [email, setEmail] = useState(defaultUserDetails.email)
  const [password, setPassword] = useState(defaultUserDetails.password)
  const [isAuthenticated, ToggleAuthenticated] = useState(false)

  const login = () => {
    setUsername(username)
    setEmail(email)
    setPassword(password)
  }

  const toggleAuthent = () => {
    ToggleAuthenticated(!isAuthenticated)
  }

  const logout = () => {
    setUser(defaultUserDetails)
  }

  return (
    <UserContext.Provider
      value={{ user, isAuthenticated, login, logout, toggleAuthent }}
    >
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }

// interface User {
//   user: IUser
//   createUser?: () => void
// }

// const UserContext = createContext([{}, () => {}])

// const UserProvider: FC<PropsWithChildren> = ({ children }) => {
//   const [user, setUser] = useState(defaultState)
//   // const createUser = () => {
//   //   setUser(user)
//   // }
//   return (
//     <UserContext.Provider value={[user, setUser]}>
//       {children}
//     </UserContext.Provider>
//   )
// }

// export { UserContext, UserProvider }

// interface User {
//   user: IUser
//   createUser?: () => void
// }

// const defaultState = {
//   username: "",
//   email: "",
//   password: "",
//   isAuthenticated: false,
// }

// const AuthStateContext = createContext(null)
// const AuthDispatchContext = createContext<SetStateAction<any>>(null)

// export function useAuthState() {
//   const context = useContext(AuthStateContext)
//   if (context === undefined) {
//     throw new Error("useAuthState must be used within a AuthProvider")
//   }

//   return context
// }

// export function useAuthDispatch() {
//   const context = useContext(AuthDispatchContext)
//   if (context === undefined) {
//     throw new Error("useAuthDispatch must be used within a AuthProvider")
//   }

//   return context
// }

// export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
//   const [user, dispatch] = useReducer(AuthReducer, initialState)

//   return (
//     <AuthStateContext.Provider value={user}>
//       <AuthDispatchContext.Provider value={dispatch}>
//         {children}
//       </AuthDispatchContext.Provider>
//     </AuthStateContext.Provider>
//   )
// }

// const UserContext = createContext<User>(defaultState)

// export const useUserContext = () => useContext(UserContext)

// export const UserProvider: FC<PropsWithChildren> = ({ children }) => {
//   const [user, setUser] = useState(defaultState)

//   const createUser = (values: SetStateAction<IUser>) => {
//     setUser(values)
//   }

//   return (
//     <UserContext.Provider
//       value={{
//         user,
//         createUser,
//         // setUser,
//       }}
//     >
//       {children}
//     </UserContext.Provider>
//   )
// }

// export default UserContext
