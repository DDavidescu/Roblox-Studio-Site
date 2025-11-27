import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage.jsx";
import GamesPage from "../pages/Games/GamesPage.jsx";
import AboutPage from "../pages/About/AboutPage.jsx";
import CareersPage from "../pages/Careers/CareersPage.jsx";
import NotFoundPage from "../pages/NotFound/NotFoundPage.jsx";

import MainLayout from "../layouts/MainLayout.jsx";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/studios" element={<StudiosPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
