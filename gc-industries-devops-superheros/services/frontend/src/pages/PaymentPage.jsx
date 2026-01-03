import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  if (!order) {
    return (
      <h2 style={{ textAlign: "center", marginTop: 100 }}>
        No order selected.
        <br />
        <button onClick={() => navigate("/catalog")}>Go to Catalog</button>
      </h2>
    );
  }

  async function handlePayment() {
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: order.id,
          amount: order.price
        })
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Payment failed");
      }

      const data = await res.json();
      setResult({ ok: true, message: data.message });

      setTimeout(() => navigate("/order-success"), 900);
    } catch (err) {
      setResult({ ok: false, message: err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="centered-page payment">
      <div className="card payment-card">
        <h2>💳 Please Complete Your Payment</h2>

        <p><strong>Product:</strong> {order.name}</p>
        <p><strong>Amount:</strong> ${order.price.toLocaleString()}</p>

        <button onClick={handlePayment} disabled={loading}>
          {loading ? "Processing..." : "Pay Now"}
        </button>

        {result && (
          <div className={result.ok ? "success" : "error"}>
            {result.message}
          </div>
        )}
      </div>
    </section>
  );
}
