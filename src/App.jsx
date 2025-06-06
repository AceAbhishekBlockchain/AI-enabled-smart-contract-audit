
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import AuditorPage from '@/pages/AuditorPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-gray-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auditor" element={<AuditorPage />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
