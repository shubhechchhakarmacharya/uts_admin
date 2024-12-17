import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "../src/pages/Dashboard";
import Top_Header from "../src/pages/Top_Header";
import Footer from "./components/footer/Footer";
import Sidenav from "../src/components/sidenav/Sidenav";
import Hr_sidenav from "./components/sidenav/Hr_sidenav";
import Dashboard_admin from "./pages/Dashboard_admin";

export default function Layout() {
  const location = useLocation();

  return (
    <div>
      <Top_Header />
      <div className="flex">
        {location.pathname === "/dashboard_admin" ? (
          <Hr_sidenav />
        ) : (
          <Sidenav />
        )}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard_admin" element={<Dashboard_admin />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
