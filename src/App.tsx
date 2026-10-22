import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import TourBar from './components/TourBar';
import './App.css';
import About from './pages/About';
import ClientSecurityTrustCenter from './pages/ClientSecurityTrustCenter';
import ControlsAndTesting from './pages/ControlsAndTesting';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';
import EnterpriseAlignment from './pages/EnterpriseAlignment';
import ThirtyPlan from './pages/ThirtyPlan';
import VendorRisk from './pages/VendorRisk';

function Workspace() {
  return (
    <div className="app">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main" className="main">
        <TourBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/controls" element={<ControlsAndTesting />} />
          <Route path="/sox" element={<Navigate to="/controls?tab=testing" replace />} />
          <Route path="/client-trust" element={<ClientSecurityTrustCenter />} />
          <Route path="/vendor-risk" element={<VendorRisk />} />
          <Route path="/risk-register" element={<Navigate to="/dashboard#register" replace />} />
          <Route path="/parent-alignment" element={<EnterpriseAlignment />} />
          <Route path="/30-60-90" element={<ThirtyPlan />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </main>
      <footer className="site-footer no-print">
        <p>
          Security Governance Command Center · Prepared by Joseph Kamara · Illustrative fictional sample data ·
          Public frameworks only
        </p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/*" element={<Workspace />} />
      </Routes>
    </HashRouter>
  );
}
