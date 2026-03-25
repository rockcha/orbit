import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import SpaceshipPage from "./pages/Spaceship/SpaceshipPage";
import NavigationPage from "./pages/Navigation/NavigationPage";
import ArchivePage from "./pages/Archive/ArchivePage";
import AppLayout from "./layouts/AppLayout/AppLayout";
import GlobalLayout from "./layouts/GlobalLayout";
import NotFoundPage from "./pages/NotFoundPage";
import PlanetPage from "./pages/PlanetPage";

import { Toaster } from "sonner";
import TravelPage from "./pages/TravelPage";

function App() {
  return (
    <div>
      <Toaster position="bottom-center" richColors expand />
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route element={<AppLayout />}>
            {/* 사이드바 + 헤더 존재 */}
            <Route path="/spaceship" element={<SpaceshipPage />} />
            <Route path="/navigation" element={<NavigationPage />} />
            <Route path="/archive" element={<ArchivePage />} />
          </Route>

          {/* 사이드바 + 헤더 X */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/planet/:id" element={<PlanetPage />} />
          <Route path="/travel/:id" element={<TravelPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
