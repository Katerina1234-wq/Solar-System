import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SolarSystemPage from "./pages/SolarSystemPage";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ExpeditionsPage from "./pages/ExpeditionsPage";
import AliensPage from "./pages/AliensPage";
import ExpeditionDetails from "./pages/ExpeditionDetails"; // ✅ ADD THIS

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<SolarSystemPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/expeditions" element={<ExpeditionsPage />} />
        <Route path="/aliens" element={<AliensPage />} />

        {/* Expedition Details Page */}
        <Route
          path="/expedition/:id"
          element={<ExpeditionDetails />}
        />
      </Routes>
    </Router>
  );
}

export default App;
