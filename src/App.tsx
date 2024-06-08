import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Info from './pages/Info';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';

const App: React.FC = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Router>
  );
};

export default App;
