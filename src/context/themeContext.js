import { createContext, useState, useContext, useEffect } from "react";

const ThemeProvider = createContext()
const ThemeDispatcher = createContext()

const ThemeContext = ({ children }) => {

  const [theme, setTheme] = useState('')

  return (
    <ThemeProvider.Provider value={theme} >
      <ThemeDispatcher.Provider value={setTheme}>
        {children}
      </ThemeDispatcher.Provider>
    </ThemeProvider.Provider>
  );
}

export const useTheme = () => useContext(ThemeProvider)
export const useThemeActions = () => {
  const theme = useTheme()
  const setTheme = useContext(ThemeDispatcher)

  useEffect(() => {
    if (theme !== "") {
      localStorage.setItem("Theme", JSON.stringify(theme))
      themeHandler()
    }
  }, [theme])

  const themeHandler = () => {
    const htmlDom = document.getElementById('root')
    if (theme === "lithe") {
      htmlDom.classList.remove("dark")
    } else {
      htmlDom.classList.add("dark")
    }
  }

  return { setTheme, themeHandler }
}
export default ThemeContext;