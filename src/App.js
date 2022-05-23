import Bills from "./pages/Bills";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import DepositPage from "./pages/DepositPage";
import Charts from "./pages/Charts";
import RemoveFromCart from "./pages/RemoveFromCart"

const App = () => {
  return (
    <main className="h-full">
      <Routes>
        <Route path="/" element={<Bills />} />
        <Route path="/DepositToCart" element={<DepositPage />} />
        <Route path="/Charts" element={<Charts />} />
        <Route path="/RemoveFromCart" element={<RemoveFromCart />} />
      </Routes>
    </main>
  );
}

export default App;