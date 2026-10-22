import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Overview', end: true },
  { to: '/dashboard', label: 'Leadership dashboard' },
  { to: '/controls', label: 'Controls & testing' },
  { to: '/vendor-risk', label: 'Vendors' },
  { to: '/client-trust', label: 'Client questionnaires' },
  { to: '/enterprise-standards', label: 'Enterprise standards' },
  { to: '/about', label: 'About' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header no-print">
      <div className="site-header-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            SG
          </span>
          <span className="brand-text">
            <span className="brand-title">Security Governance Command Center</span>
            <span className="brand-sub">Sample operating model</span>
          </span>
        </NavLink>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close menu' : 'Menu'}
        </button>
        <nav id="site-nav" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={Boolean(link.end)}
              className={({ isActive }) => (isActive ? 'nav-link is-active' : 'nav-link')}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
