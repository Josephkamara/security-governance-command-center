import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Dashboard' },
  { to: '/controls', label: 'Control framework' },
  { to: '/sox', label: 'SOX ITGC' },
  { to: '/client-trust', label: 'Client trust' },
  { to: '/vendor-risk', label: 'Vendor risk' },
  { to: '/risk-register', label: 'Risk register' },
  { to: '/parent-alignment', label: 'Parent alignment' },
  { to: '/30-60-90', label: '30-60-90 plan' },
  { to: '/about', label: 'About Joseph' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header no-print">
      <div className="site-header-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            SG
          </span>
          <span className="brand-text">
            <span className="brand-title">Security Governance Command Center</span>
            <span className="brand-sub">Healthcare services organization</span>
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
              end={link.to === '/'}
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
