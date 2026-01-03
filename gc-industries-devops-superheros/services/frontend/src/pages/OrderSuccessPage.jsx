import React from "react";
import { Link } from "react-router-dom";

export default function OrderSuccessPage(){
  return (
    <section className="centered-page success">
      <div className="success-box">
        <h1>🎉 Order Successful!</h1>
        <p>Your SuerHero will be at your doorsteps very soon.</p>
        <Link to="/catalog" className="primary-btn big">Back to Catalog</Link>
      </div>
    </section>
  );
}
