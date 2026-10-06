/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PrivacyPage from './pages/PrivacyPage';

function SpaRedirectHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle SPA query parameter redirects (e.g., /?/privacy -> /privacy)
    if (location.search && location.search.startsWith('?/')) {
      const targetPath = location.search
        .slice(1)
        .split('&')
        .map(s => s.replace(/~and~/g, '&'))
        .join('?');
      navigate(targetPath, { replace: true });
    }
  }, [location, navigate]);

  return null;
}

export default function App() {
  return (
    <Router>
      <SpaRedirectHandler />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
