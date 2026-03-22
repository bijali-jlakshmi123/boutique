"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShoppingBag,
  Lock,
  Mail,
  ChevronRight,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (data.success) {
        window.location.href = "/admin";
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Background Image with Dark Overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image 
          src="/mehendi.png" 
          alt="Boutique Atmosphere" 
          fill 
          style={{ objectFit: 'cover' }}
          priority
        />
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to bottom, rgba(42, 3, 3, 0.85), rgba(0, 0, 0, 0.95))',
          backdropFilter: 'blur(8px)'
        }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="card"
        style={{ 
          width: "100%", 
          maxWidth: "450px", 
          padding: "3rem",
          position: "relative",
          zIndex: 10,
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(30px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 100px 200px rgba(0, 0, 0, 0.5)'
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div
            style={{
              background: "var(--primary)",
              color: "white",
              display: "inline-flex",
              padding: "1rem",
              borderRadius: "20px",
              marginBottom: "1.5rem",
              boxShadow: "0 10px 20px -5px rgba(225, 29, 72, 0.4)",
            }}
          >
            <ShoppingBag size={32} />
          </div>
          <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
            Welcome Back
          </h1>
          <p style={{ opacity: 0.6 }}>Login to your admin dashboard</p>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              background: "#fee2e2",
              color: "#ef4444",
              padding: "1rem",
              borderRadius: "12px",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              fontSize: "0.9rem",
            }}
          >
            <AlertCircle size={18} />
            {error}
          </motion.div>
        )}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.85rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}
            >
              Email Address
            </label>
            <div style={{ position: "relative" }}>
              <Mail
                style={{
                  position: "absolute",
                  left: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  opacity: 0.4,
                }}
                size={18}
              />
              <input
                type="email"
                required
                placeholder="samira@gmail.com"
                style={{
                  width: "100%",
                  padding: "1rem 1rem 1rem 3rem",
                  borderRadius: "12px",
                  border: "1px solid var(--border)",
                  background: "white",
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div style={{ marginBottom: "2.5rem" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.85rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
              }}
            >
              Password
            </label>
            <div style={{ position: "relative" }}>
              <Lock
                style={{
                  position: "absolute",
                  left: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  opacity: 0.4,
                }}
                size={18}
              />
              <input
                type="password"
                required
                placeholder="••••••••"
                style={{
                  width: "100%",
                  padding: "1rem 1rem 1rem 3rem",
                  borderRadius: "12px",
                  border: "1px solid var(--border)",
                  background: "white",
                }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary"
            disabled={loading}
            style={{
              width: "100%",
              padding: "1.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              fontSize: "1.1rem",
            }}
          >
            {loading ? "Authenticating..." : "Sign In Now"}
            {!loading && <ChevronRight size={20} />}
          </button>
        </form>

        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <p style={{ opacity: 0.6, fontSize: "0.9rem" }}>
            Don't have access?{" "}
            <Link href="/" style={{ color: "var(--primary)", fontWeight: 600 }}>
              Contact Boutique Owner
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
