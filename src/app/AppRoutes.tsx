import { AnimatePresence, motion } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { legacyRedirects } from "@/content/navigation";
import ActivitiesPage from "@/features/activities/ActivitiesPage";
import AboutPage from "@/features/about/AboutPage";
import BranchesPage from "@/features/branches/BranchesPage";
import CalendarPage from "@/features/calendar/CalendarPage";
import HomePage from "@/features/home/HomePage";
import JoinPage from "@/features/join/JoinPage";
import { easeOut } from "@/shared/lib/motion";

const pages = [
  { path: "/", element: <HomePage /> },
  { path: "/sobre", element: <AboutPage /> },
  { path: "/ramos", element: <BranchesPage /> },
  { path: "/atividades", element: <ActivitiesPage /> },
  { path: "/agenda", element: <CalendarPage /> },
  { path: "/participe", element: <JoinPage /> },
];

export function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.4, ease: easeOut }}
      >
        <Routes location={location}>
          {pages.map((page) => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
          {legacyRedirects.map((redirect) => (
            <Route key={redirect.path} path={redirect.path} element={<Navigate to={redirect.to} replace />} />
          ))}
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}
