import Bills from "./pages/Bills";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import DepositPage from "./pages/DepositPage";
import ChartPage from "./pages/ChartPage";
import RemoveFromCart from "./pages/RemoveFromCart"
import InfoPage from "./pages/InfoPage"

const App = () => {
  return (
    <main className="h-full">
      <Routes>
        <Route path="/" element={<Bills />} />
        <Route path="/DepositToCart" element={<DepositPage />} />
        <Route path="/Charts" element={<ChartPage />} />
        <Route path="/RemoveFromCart" element={<RemoveFromCart />} />
        <Route path="/Info" element={<InfoPage />} />
        <Route path="/Settings" element={<InfoPage />} />
      </Routes>
    </main>
  );
}

export default App;