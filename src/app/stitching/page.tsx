'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Scissors, Upload, Heart, ChevronRight, CheckCircle2, Ruler } from 'lucide-react'
import Navbar from '@/components/Navbar'

export default function StitchingPage() {
  const [submitted, setSubmitted] = useState(false)
  const [measurements, setMeasurements] = useState({
    bust: '', waist: '', hips: '', length: '', shoulder: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--background)' }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="card" style={{ textAlign: 'center' }}>
          <CheckCircle2 size={64} style={{ color: '#10b981', margin: '0 auto 2rem' }} />
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Order Placed!</h2>
          <p style={{ opacity: 0.7, marginBottom: '2rem' }}>We've received your requirements. Our designer will call you for a trial shortly.</p>
          <button onClick={() => window.location.href = '/'} className="btn-primary">Return Home</button>
        </motion.div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="container">
        <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <div style={{ background: 'var(--primary)', color: 'white', display: 'inline-flex', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 600, gap: '0.5rem', alignItems: 'center', marginBottom: '1.5rem' }}>
            <Scissors size={14} /> BESPOKE STITCHING
          </div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Bespoke <span style={{ color: 'var(--primary)' }}>Dress Designing</span></h1>
          <p style={{ opacity: 0.6, maxWidth: '600px', margin: '0 auto' }}>Submit your measurements and designs from the comfort of your home. We'll handle the precision and craft.</p>
        </header>

        <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
          {/* Measurements Form */}
          <div className="card">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Measurement Details (inches)</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>Bust</label>
                <input required type="number" step="0.5" placeholder="38.5" style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--border)', borderRadius: '12px' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>Waist</label>
                <input required type="number" step="0.5" placeholder="32.0" style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--border)', borderRadius: '12px' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>Hips</label>
                <input required type="number" step="0.5" placeholder="40.0" style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--border)', borderRadius: '12px' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>Shoulder</label>
                <input required type="number" step="0.5" placeholder="15.5" style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--border)', borderRadius: '12px' }} />
              </div>
              <div style={{ gridColumn: 'span 2' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>Total Length</label>
                <input required type="number" step="0.5" placeholder="42.0" style={{ width: '100%', padding: '0.8rem', border: '1px solid var(--border)', borderRadius: '12px' }} />
              </div>
            </div>
            <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', alignItems: 'center', opacity: 0.6 }}>
              <Ruler size={24} />
              <p style={{ fontSize: '0.85rem' }}>Stored measurement DB helps us recreate your perfect fit in future orders automatically.</p>
            </div>
          </div>

          {/* Reference & Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="card">
              <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Design & Reference</h2>
              <div style={{ 
                border: '2px dashed var(--border)', 
                padding: '3rem 2rem', 
                borderRadius: '24px', 
                textAlign: 'center',
                background: 'rgba(225, 29, 72, 0.05)',
                color: 'var(--primary)',
                cursor: 'pointer'
              }}>
                <Upload size={32} style={{ marginBottom: '1rem' }} />
                <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>Drop your reference design here</p>
                <p style={{ opacity: 0.6, fontSize: '0.8rem' }}>JPG, PNG or PDF (max 10MB)</p>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>Special Instructions</label>
                <textarea rows={4} style={{ width: '100%', padding: '1rem', border: '1px solid var(--border)', borderRadius: '12px' }} placeholder="E.g., Heart shape neck, heavy embroidery..."></textarea>
              </div>
            </div>

            <div className="card" style={{ background: 'var(--foreground)', color: 'white' }}>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Confirm & Notify</h2>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', opacity: 0.7, marginBottom: '0.5rem' }}>Contact Number (for WhatsApp)</label>
                <input required type="tel" style={{ width: '100%', padding: '0.8rem', border: 'none', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', color: 'white' }} defaultValue="+91 " />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem' }}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
