import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function CatalogPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleOrder(item) {
    navigate("/payment", { state: { order: item } });
  }

  useEffect(() => {
    let retries = 3;

    const fetchCatalog = () => {
      fetch("/api/catalog")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch catalog");
          return res.json();
        })
        .then((data) => {
          setProducts(data);
          setError(null);
          setLoading(false);
        })
        .catch((err) => {
          if (retries > 0) {
            retries--;
            setTimeout(fetchCatalog, 700);
          } else {
            console.error(err);
            setError(err.message);
            setLoading(false);
          }
        });
    };

    fetchCatalog();
  }, []);

  if (loading) {
    return <p style={{ color: "#8fd" }}>Loading catalog…</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <section className="centered-page catalog">
      <h1 className="page-title">
        🛒 Our Carefully Crafted Product Catalog
      </h1>

      <p className="page-sub">
        Pick your SuperHeros. New recruits coming soon…
      </p>

      <div className="product-grid cinematic-grid">
        {products.map((p, index) => (
          <ProductCard
            key={p.id}
            product={{ ...p, animDelay: index * 100 }}
            onOrder={handleOrder}
          />
        ))}
      </div>
    </section>
  );
}
