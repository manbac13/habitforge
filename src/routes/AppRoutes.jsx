import Fallback from "@/components/Fallback/Fallback";
import MainLayout from "@/layouts/mainLayout";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//lazy imports
const Home = lazy(() => import("@/pages/home/Home"));
const About = lazy(() => import("@/pages/about/About"));
const NotFound = lazy(() => import("@/pages/notFound/NotFound"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* fallback */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
