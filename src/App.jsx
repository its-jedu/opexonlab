import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo.png";
// import BlogDetails from "./pages/BlogDetails";

// Lazy load pages
const HomePage = lazy(() => import("./pages/HomePage"));
// const AboutPage = lazy(() => import("./pages/AboutPage"));
// const ProductPage = lazy(() => import("./pages/ProductPage"));

const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogDetail = lazy(() => import("./pages/BlogDetails"));
// const ServicesPage = lazy(() => import("./pages/ServicesPage"));

// const BlogPage = lazy(() => import("./pages/BlogPage"));
const ServicePage = lazy(() => import("./pages/ServicePage"));

const ContactPage = lazy(() => import("./pages/ContactPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage"));
const GmailPage = lazy(() => import("./pages/GmailPage"));
const GetStartedPage = lazy(() => import("./pages/GetStartedPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="relative">
            <img
              src={logo}
              alt="Loading logo"
              className="w-20 h-20 animate-scale-pulse relative z-10"
            />
          </div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/product" element={<ProductPage />} /> */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/gmail" element={<GmailPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />

        {/* Not Found route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
