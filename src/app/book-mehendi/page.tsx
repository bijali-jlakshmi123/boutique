'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, User, Phone, CheckCircle2, ChevronRight, Wand2 } from 'lucide-react'
import Navbar from '@/components/Navbar'

const timeSlots = [
  '10:00 AM', '11:00 AM', '12:00 PM', 
  '02:00 PM', '03:00 PM', '04:00 PM', 
  '05:00 PM', '06:00 PM'
]

export default function BookMehendi() {
  const [step, setStep] = useState(1)
  const [date, setDate] = useState('')
  const [slot, setSlot] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--background)' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="card" 
          style={{ textAlign: 'center', maxWidth: '400px' }}
        >
          <CheckCircle2 size={64} style={{ color: '#10b981', margin: '0 auto 2rem' }} />
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Booking Successful!</h2>
          <p style={{ opacity: 0.7, marginBottom: '2rem' }}>
            Thank you for choosing Smart Boutique. We've sent a WhatsApp confirmation to your phone.
          </p>
          <button onClick={() => window.location.href = '/'} className="btn-primary" style={{ width: '100%' }}>
            Return Home
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', paddingTop: '100px' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Book Your <span style={{ color: 'var(--primary)' }}>Slot</span></h1>
            <p style={{ opacity: 0.6 }}>Choose a preferred date and time for your mehendi session.</p>
          </header>

          <form onSubmit={handleSubmit} className="card" style={{ padding: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              
              {/* Step 1: Date & Time */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
                  <div style={{ background: 'var(--primary)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>1</div>
                  <h3 style={{ fontSize: '1.25rem' }}>Select Timing</h3>
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 600 }}>Preferred Date</label>
                  <input 
                    type="date" 
                    required
                    style={{ 
                      width: '100%', 
                      padding: '1rem', 
                      borderRadius: '12px', 
                      border: '1px solid var(--border)', 
                      background: 'white',
                      fontFamily: 'inherit'
                    }}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 600 }}>Available Slots</label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.8rem' }}>
                    {timeSlots.map(t => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSlot(t)}
                        style={{ 
                          padding: '0.8rem', 
                          borderRadius: '12px', 
                          border: '1px solid var(--border)',
                          background: slot === t ? 'var(--primary)' : 'white',
                          color: slot === t ? 'white' : 'inherit',
                          fontSize: '0.85rem',
                          fontWeight: 500
                        }}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 2: Customer Info */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
                  <div style={{ background: 'var(--primary)', color: 'white', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</div>
                  <h3 style={{ fontSize: '1.25rem' }}>Personal Details</h3>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 600 }}>Full Name</label>
                  <input type="text" required placeholder="Priya Sharma" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border)' }} />
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 600 }}>Phone Number</label>
                  <input type="tel" required placeholder="+91 9876543210" style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border)' }} />
                </div>

                <div style={{ marginBottom: '2.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 600 }}>Service Design</label>
                  <select style={{ width: '100%', padding: '1rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'white' }}>
                    <option>Bridal Mehendi</option>
                    <option>Arabic Simple</option>
                    <option>Engagement Mehendi</option>
                    <option>Casual Patterns</option>
                  </select>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                   Confirm Booking <ChevronRight size={20} />
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
