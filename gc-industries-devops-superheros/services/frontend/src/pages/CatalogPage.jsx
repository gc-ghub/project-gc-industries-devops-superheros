import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { useNavigate } from "react-router-dom";

export default function CatalogPage() {
  const navigate = useNavigate();

  function handleOrder(item) {
    navigate("/payment", { state: { order: item } });
  }

  return (
    <section className="centered-page catalog">

      <h1 className="page-title">🛒 Our carefully crafted Product Catalog</h1>
      <p className="page-sub">Pick your SuperHero. New recruits coming soon…</p>

      {/* NEW — Two-row cinematic grid */}
      <div className="product-grid cinematic-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onOrder={handleOrder} />
        ))}
      </div>

    </section>
  );
}
