import Fallback from "@/components/Fallback/Fallback";
import AuthLayout from "@/layouts/authLayout";
import MainLayout from "@/layouts/mainLayout";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//lazy imports
const Home = lazy(() => import("@/pages/home/Home"));
const NotFound = lazy(() => import("@/pages/notFound/NotFound"));

//auth
const Register = lazy(() => import("@/pages/auth/register/Register"));
const Login = lazy(() => import("@/pages/auth/login/Login"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />

            {/* fallback */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
