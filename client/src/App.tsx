import React from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const App: React.FC = () => {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
    </>
  );
};

export default App;
