'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Scissors, Calendar, Wand2, Package, Search, Heart, Sparkles, Star } from 'lucide-react'

export default function Home() {
  return (
    <div style={{ background: 'var(--background)' }}>
      <Hero />
      <Services />
      
      {/* Brand Narrative Section */}
      <section style={{ padding: '8rem 0', background: 'var(--background)', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              style={{ position: 'relative' }}
            >
              <div style={{ 
                width: '100%', 
                height: '600px', 
                borderRadius: '40px', 
                overflow: 'hidden', 
                boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <img src="/mehendi2.png" alt="Samira Artistry" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', bottom: '-2rem', right: '-2rem', background: 'var(--primary)', color: 'white', padding: '2rem', borderRadius: '24px', boxShadow: 'var(--shadow)' }}>
                <Star size={32} style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Luxury Reinvented</h3>
                <p style={{ opacity: 0.8, fontSize: '0.85rem' }}>The Samira Signature Experience</p>
              </div>
            </motion.div>

            <div style={{ color: 'var(--foreground)' }}>
              <div style={{ background: 'var(--primary)', padding: '1rem', borderRadius: '16px', display: 'inline-flex', marginBottom: '2rem', boxShadow: '0 10px 20px rgba(225,29,72,0.3)' }}>
                <Sparkles size={32} style={{ color: 'white' }} />
              </div>
              <h2 style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '2rem' }}>Experience the <span className="gradient-text">Samira Promise</span></h2>
              <p style={{ fontSize: '1.1rem', opacity: 0.7, marginBottom: '2.5rem', lineHeight: '1.8' }}>
                We don't just design clothes; we weave memories. Our artisans spend hours perfecting every curve of your mehendi and every stitch of your ensemble to ensure you look nothing less than legendary.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                <FeatureSmall title="Authentic Art" desc="Hand-drawn traditional henna patterns." />
                <FeatureSmall title="Precision Tailoring" desc="Lasercut precision, hand-finish quality." color="var(--primary)" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section style={{ 
        padding: '10rem 0', 
        position: 'relative',
        margin: '6rem 2rem',
        borderRadius: '60px',
        overflow: 'hidden'
      }}>
        {/* Background Overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'var(--foreground)', zIndex: 0 }} />
        <div style={{ position: 'absolute', right: '-10%', top: '-10%', width: '600px', height: '600px', background: 'var(--primary)', opacity: 0.1, filter: 'blur(100px)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: 'var(--background)' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ fontSize: '4.5rem', marginBottom: '2rem', maxWidth: '900px', margin: '0 auto 2rem' }}
          >
            Your Vision, Our <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Artistry</span>
          </motion.h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.7, marginBottom: '4rem', maxWidth: '640px', margin: '0 auto 4rem', fontWeight: 500 }}>
            Transform your boutique experience today. Personalized designs, real-time tracking, and effortless elegance.
          </p>
          <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', alignItems: 'center' }}>
            <a href="/stitching" className="btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>Get Custom Stitching</a>
            <a href="/mehendi" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 700, fontSize: '1.1rem', color: 'var(--primary)' }}>Explore Gallery <ArrowRight size={20} /></a>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureSmall({ title, desc, color }: { title: string, desc: string, color?: string }) {
  return (
    <div>
      <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--foreground)' }}>
        <div style={{ width: '6px', height: '6px', background: 'var(--primary)', borderRadius: '50%' }} />
        {title}
      </h4>
      <p style={{ fontSize: '0.85rem', opacity: 0.8, color: color || 'var(--foreground)' }}>{desc}</p>
    </div>
  )
}

function ArrowRight({ size }: { size: number }) {
  return <Star size={size} /> // Simple placeholder or actual arrow if imported
}
