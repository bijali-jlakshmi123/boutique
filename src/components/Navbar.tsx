"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, User, ShoppingBag, Heart, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide Navbar on Admin & Login pages
  if (pathname?.startsWith('/admin') || pathname === '/login') {
    return null;
  }

  const navLinks = [
    { name: "Mehendi Gallery", href: "/mehendi" },
    { name: "Book Slot", href: "/book-mehendi" },
    { name: "Stitching", href: "/stitching" },
    { name: "Track Order", href: "/track" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "glass py-3" : "bg-transparent py-6"}`}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 4rem",
        }}
      >
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: "0.8rem" }}
        >
          <div
            style={{
              position: "relative",
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              overflow: "hidden",
              background: "var(--primary)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/logo.png"
              alt="Samira"
              layout="fill"
              objectFit="cover"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "1",
            }}
          >
            <span
              className="brand"
              style={{
                fontSize: "1.8rem",
                fontWeight: "800",
                letterSpacing: "-0.05em",
                color: "var(--foreground)",
              }}
            >
              Samira
            </span>
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: "600",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                opacity: 0.5,
              }}
            >
              Boutique Collective
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div
          style={{ display: "flex", gap: "3rem", alignItems: "center" }}
          className="desktop-nav"
        >
          <ul style={{ display: "flex", gap: "2.5rem" }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  style={{
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    position: "relative",
                    opacity: 0.8,
                  }}
                  className="nav-item"
                >
                  {link.name}
                  <motion.div
                    className="nav-dot"
                    layoutId="nav-dot"
                    style={{
                      position: "absolute",
                      bottom: "-10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "4px",
                      height: "4px",
                      background: "var(--primary)",
                      borderRadius: "50%",
                      opacity: 0,
                    }}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div
            style={{
              width: "1px",
              height: "24px",
              background: "var(--border)",
            }}
          />

          <div style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}>
            <button
              style={{ background: "none", opacity: 0.6 }}
              className="hover-scale"
            >
              <Search size={20} />
            </button>
            <button
              style={{ background: "none", opacity: 0.6 }}
              className="hover-scale"
            >
              <Heart size={20} />
            </button>
            <Link
              href="/login"
              className="btn-primary"
              style={{
                padding: "0.75rem 1.8rem",
                borderRadius: "14px",
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
              }}
            >
              <User size={18} />
              Admin
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-toggle"
          style={{ display: "none", background: "none" }}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass"
            style={{
              width: "100vw",
              background: "white",
              padding: "2rem",
              position: "absolute",
              top: "100%",
              left: 0,
            }}
          >
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    style={{ fontSize: "1.2rem", fontWeight: 600 }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <Link
                href="/login"
                className="btn-primary"
                style={{ textAlign: "center" }}
              >
                Admin Login
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .desktop-nav {
          display: flex;
        }
        .nav-item:hover {
          opacity: 1 !important;
          color: var(--primary) !important;
        }
        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
