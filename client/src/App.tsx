import React from "react";
import Dashboard from "./pages/dashboard/Dashboard";
import Chart from "./pages/dashboard/Chart";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Wrapper from "./components/layout/Wrapper";

const App: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/" element={<Chart />} /> */}
        </Routes>
        <Footer />
      </Wrapper>
    </>
  );
};

export default App;
