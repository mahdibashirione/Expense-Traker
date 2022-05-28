import Bills from "./pages/Bills";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import DepositPage from "./pages/DepositPage";
import ChartPage from "./pages/ChartPage";
import RemoveFromCart from "./pages/RemoveFromCart"
import InfoPage from "./pages/InfoPage"
import SettingsPage from "./pages/SettingsPage"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useThemeActions } from "./context/themeContext";

const App = () => {

  const [t, i18n] = useTranslation()
  const [language, setLanguage] = useState('fa')
  const themeActions = useThemeActions()

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  useEffect(() => {
    const langStorage = JSON.parse(localStorage.getItem("Language"))
    if (langStorage) {
      setLanguage(langStorage)
    }
    const themeStorage = JSON.parse(localStorage.getItem("Theme"))
    if (themeStorage) {
      themeActions.setTheme(themeStorage)
    } else {
      themeActions.setTheme("lithe")
    }
  }, [])


  return (
    <main className="h-full flex flex-col items-center dark:bg-zinc-800 min-h-[calc(100vh-62px)]">
      <Routes>
        <Route path="/" element={<Bills />} />
        <Route path="/DepositToCart" element={<DepositPage />} />
        <Route path="/Charts" element={<ChartPage />} />
        <Route path="/RemoveFromCart" element={<RemoveFromCart />} />
        <Route path="/Info" element={<InfoPage />} />
        <Route path="/Settings" element={<SettingsPage />} />
      </Routes>
    </main>
  );
}

export default App;