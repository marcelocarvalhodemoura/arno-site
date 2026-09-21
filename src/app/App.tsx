import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "@/app/AppRoutes";
import { BackToTop } from "@/app/BackToTop";
import { ScrollToTop } from "@/app/ScrollToTop";
import Footer from "@/features/layout/Footer";
import Navbar from "@/features/layout/Navbar";
import ScrollProgress from "@/shared/ui/ScrollProgress";
import "@/shared/styles/app.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollProgress />
        <ScrollToTop />
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}
