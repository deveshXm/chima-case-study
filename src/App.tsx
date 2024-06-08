import React from "react";
import { Route,Routes} from 'react-router-dom';

import Info from "./pages/Info";
import Error from "./pages/Error";
import Navbar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";

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
