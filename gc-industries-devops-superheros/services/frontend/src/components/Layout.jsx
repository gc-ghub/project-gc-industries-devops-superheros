import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../ThemeContext";

export default function Layout({ children }) {
  const { mode, toggle } = useTheme();
  const loc = useLocation();

  return (
    <div className="app-root">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">GC Industries — <span className="ver">Shipping SuperHeros into Devops World</span></div>
          <nav className="nav">
            <Link to="/" className={`nav-btn ${loc.pathname === '/' ? 'active' : ''}`}>🏡 Home</Link>
            <Link to="/catalog" className={`nav-btn ${loc.pathname.startsWith('/catalog') ? 'active' : ''}`}>📦 Catalog</Link>
            <button className="theme-toggle" onClick={toggle}>
              {mode === "dark" ? "🌙 Dark" : "☀️ Light"}
            </button>
          </nav>
        </div>
      </header>

      <main className="page-container">
        {children}
      </main>

      <footer className="footer">
        <div>SuperHeros tested in fictional worlds, Ready to do jobs in real world. </div>
      </footer>
    </div>
  );
}
