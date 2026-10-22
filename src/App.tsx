import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import './App.css';
import About from './pages/About';
import ClientSecurityTrustCenter from './pages/ClientSecurityTrustCenter';
import Dashboard from './pages/Dashboard';
import ParentEnterpriseAlignment from './pages/ParentEnterpriseAlignment';
import RiskRegister from './pages/RiskRegister';
import SOXITGCTracker from './pages/SOXITGCTracker';
import ThirtyPlan from './pages/ThirtyPlan';
import UnifiedControlFramework from './pages/UnifiedControlFramework';
import VendorRisk from './pages/VendorRisk';

export default function App() {
  return (
    <HashRouter>
      <div className="app">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation />
        <main id="main" className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/controls" element={<UnifiedControlFramework />} />
            <Route path="/sox" element={<SOXITGCTracker />} />
            <Route path="/client-trust" element={<ClientSecurityTrustCenter />} />
            <Route path="/vendor-risk" element={<VendorRisk />} />
            <Route path="/risk-register" element={<RiskRegister />} />
            <Route path="/parent-alignment" element={<ParentEnterpriseAlignment />} />
            <Route path="/30-60-90" element={<ThirtyPlan />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <footer className="site-footer no-print">
          <p>
            Security Governance Command Center · Prepared by Joseph Kamara · Illustrative fictional sample data ·
            Public frameworks only
          </p>
        </footer>
      </div>
    </HashRouter>
  );
}
