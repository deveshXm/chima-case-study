import React from "react";
import { Route,Routes, Link } from 'react-router-dom';
import Info from "./pages/Info";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";

const Navbar: React.FC = () => {
  return (
    <nav className="p-4">
      <Link to="/" style={{ textDecoration: "none", fontSize: "20px", fontWeight: "bold" }}>
        VidGen
      </Link>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
