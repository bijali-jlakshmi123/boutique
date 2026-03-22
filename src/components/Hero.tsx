"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Star,
  ShieldCheck,
  PlayCircle,
} from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "5rem 0",
        background: "var(--background)",
      }}
    >
      {/* 🔮 1. Cinematic Atmospheric Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            top: "-20%",
            left: "-10%",
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
            filter: "blur(150px)",
            borderRadius: "50%",
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -45, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            bottom: "-20%",
            right: "-10%",
            width: "90%",
            height: "90%",
            background:
              "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
            filter: "blur(180px)",
            borderRadius: "50%",
          }}
        />
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "0 4rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "8rem",
            flexWrap: "wrap",
          }}
        >
          {/* 📝 Left Content: Brand Masterpiece */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ flex: 1, minWidth: "400px" }}
          >
            <motion.div
              whileHover={{ scale: 1.05, x: 5 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "0.6rem 1.5rem",
                borderRadius: "999px",
                color: "var(--gold)",
                fontWeight: 700,
                marginBottom: "2.5rem",
                backdropFilter: "blur(20px)",
                letterSpacing: "0.1em",
                fontSize: "0.7rem",
              }}
            >
              <Sparkles size={18} />
              EST. 2024 • LUXURY BOUTIQUE EXCELLENCE
            </motion.div>

            <h1
              style={{
                fontSize: "clamp(4rem, 8vw, 9rem)",
                fontWeight: 900,
                lineHeight: 0.85,
                letterSpacing: "-0.06em",
                marginBottom: "2.5rem",
                color: "var(--foreground)",
              }}
            >
              Weave Your <br />
              <span
                style={{
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "var(--primary)",
                  fontFamily: "serif",
                }}
              >
                Legend
              </span>{" "}
              <br />
              In Every{" "}
              <span
                style={{
                  background:
                    "linear-gradient(to right, var(--primary), var(--gold), var(--primary))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 30px rgba(225, 29, 72, 0.3))",
                }}
              >
                Stitch
              </span>
            </h1>

            <p
              style={{
                color: "rgba(241, 228, 193, 0.7)",
                fontSize: "1.4rem",
                marginBottom: "3.5rem",
                maxWidth: "650px",
                lineHeight: 1.6,
                fontWeight: 300,
              }}
            >
              A sanctuary where heritage meets the future. Samira Boutique
              transforms your vision into wearable art through mehendi mastery
              and couture precision.
            </p>

            <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/book-mehendi"
                  style={{
                    background: "var(--primary)",
                    padding: "1.5rem 3rem",
                    borderRadius: "24px",
                    color: "white",
                    fontWeight: 900,
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    boxShadow: "0 30px 60px -12px rgba(225, 29, 72, 0.4)",
                    fontSize: "1.2rem",
                    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  Secure Reservation <ArrowRight size={24} />
                </Link>
              </motion.div>

              <motion.button
                whileHover={{ x: 10 }}
                style={{
                  background: "none",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  color: "var(--foreground)",
                  fontWeight: 900,
                  cursor: "pointer",
                  fontSize: "1.1rem",
                }}
              >
                <div
                  style={{
                    width: "4rem",
                    height: "4rem",
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "var(--primary)",
                  }}
                >
                  <PlayCircle size={32} />
                </div>
                <Link href="/gallery">GALLERY TOUR</Link>
              </motion.button>
            </div>

            {/* High-Fidelity Executive Stats */}
            <div
              style={{
                display: "flex",
                gap: "5rem",
                marginTop: "5rem",
                paddingTop: "3rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              <MetricItem value="12k+" label="Artisan Crafts" />
              <MetricItem value="4.9★" label="Client Love" />
              <MetricItem value="100%" label="Pure Elegance" />
            </div>
          </motion.div>

          {/* 🖼️ Right Side: The 3D Masterpiece Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              flex: 1,
              position: "relative",
              perspective: "2000px",
              minWidth: "400px",
            }}
          >
            <motion.div
              whileHover={{ rotateY: -15, rotateX: 8, scale: 1.05 }}
              className="group"
              style={{
                y: y1,
                position: "relative",
                width: "100%",
                height: "800px",
                borderRadius: "100px",
                overflow: "hidden",
                border: "8px solid rgba(255, 255, 255, 0.05)",
                boxShadow: "0 100px 150px -40px rgba(0, 0, 0, 1)",
                zIndex: 10,
                transition: "all 0.7s ease-out",
              }}
            >
              <Image
                src="/hero.png"
                alt="Samira Boutique Masterpiece"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, var(--background), transparent)",
                  opacity: 0.8,
                }}
              />
            </motion.div>

            {/* 🏷️ Elite Floating Glass Components */}
            <motion.div
              style={{
                y: y2,
                position: "absolute",
                right: "-4rem",
                top: "15%",
                zIndex: 20,
              }}
              animate={{ y: [0, -40, 0], rotate: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            >
              <GlassTag
                icon={<Star size={24} className="text-gold" />}
                text="Voted #1 Boutique 2024"
              />
            </motion.div>

            <motion.div
              style={{
                position: "absolute",
                left: "-3rem",
                bottom: "25%",
                zIndex: 20,
              }}
              animate={{ y: [0, 40, 0], rotate: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            >
              <GlassTag
                icon={<ShieldCheck size={24} className="text-primary" />}
                text="Verified Artisan Work"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 🖱️ Global Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
          opacity: 0.3,
        }}
      >
        <div
          style={{
            width: "1px",
            height: "80px",
            background:
              "linear-gradient(to bottom, var(--primary), transparent)",
          }}
        />
        <span
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            fontWeight: 900,
            color: "var(--foreground)",
          }}
        >
          Scroll to Experience
        </span>
      </motion.div>
    </section>
  );
}

function MetricItem({ value, label }: { value: string; label: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "0.5rem",
      }}
    >
      <h3
        style={{
          fontSize: "3rem",
          fontWeight: 900,
          color: "var(--foreground)",
          letterSpacing: "-0.05em",
        }}
      >
        {value}
      </h3>
      <p
        style={{
          fontSize: "0.6rem",
          textTransform: "uppercase",
          letterSpacing: "0.3em",
          fontWeight: 900,
          color: "rgba(241, 228, 193, 0.4)",
        }}
      >
        {label}
      </p>
    </div>
  );
}

function GlassTag({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(40px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "1.25rem 2rem",
        borderRadius: "32px",
        boxShadow: "0 50px 100px rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        gap: "1.25rem",
      }}
    >
      <div
        style={{
          width: "3rem",
          height: "3rem",
          borderRadius: "16px",
          background: "rgba(225, 29, 72, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        {icon}
      </div>
      <span
        style={{
          fontSize: "0.9rem",
          fontWeight: 900,
          color: "var(--foreground)",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </span>
    </div>
  );
}
