import { createContext, FC, PropsWithChildren, useState } from "react"

interface IThemeContext {
  dark: boolean
  toggleDark?: () => void
}

const defaultState = {
  dark: false,
}

export const ThemeContext = createContext<IThemeContext>(defaultState)

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [dark, setDark] = useState(defaultState.dark)

  const toggleDark = () => {
    setDark(!dark)
  }

  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
