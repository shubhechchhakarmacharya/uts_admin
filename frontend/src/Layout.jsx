import { Routes, Route } from "react-router-dom";
import Dashboard from "../src/pages/Dashboard";
import Top_Header from "../src/pages/Top_Header";
import Sidenav from "../src/components/sidenav/Sidenav";
import Dashboard_admin from "./pages/Dashboard_admin";
export default function Layout() {
  return (
    <div>
      <Top_Header />
      <div className="flex">
        <Sidenav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard_admin" element={<Dashboard_admin />} />
        </Routes>
      </div>
    </div>
  );
}
