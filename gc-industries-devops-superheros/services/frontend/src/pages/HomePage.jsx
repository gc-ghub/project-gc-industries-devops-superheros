import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home-wrapper fade-in">

      {/* 3-TILE GRID */}
      <div className="home-grid">

        {/* LEFT TILE – Marvel Group */}
        <div className="home-tile">
          <img 
            src="/images/marvel_group.jpg" 
            alt="Marvel Superheroes" 
            className="home-hero-img"
          />
        </div>

        {/* CENTER TILE – Your Welcome Message */}
        <div className="home-tile home-center-tile">
          <h1>DevOps SuperHero Shop</h1>
          <p className="home-description">
            Shop your SuperHero's today to build a strong DevOps Team.  
            Our SuperHeros are experienced with Terraform, Kubernetes, Istio, AWS,  
            GitHub Actions, Docker and more.
          </p>

          <div className="home-btn-row">
            <Link to="/" className="primary-btn">🏠 Home</Link>
            <Link to="/catalog" className="primary-btn">🛒 Catalog</Link>
          </div>
        </div>

        {/* RIGHT TILE – DC Group */}
        <div className="home-tile">
          <img 
            src="/images/dc_group.jpg" 
            alt="DC Superheroes"
            className="home-hero-img"
          />
        </div>

      </div>

      {/* Footer */}
      <footer className="footer-text">
        SuperHeros tested in fictional worlds, Ready to do jobs in real world.
      </footer>

    </div>
  );
}
