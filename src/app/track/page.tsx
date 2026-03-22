'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Scissors, Package, CheckCircle2, Search, Clock, MapPin, Navigation } from 'lucide-react'
import Navbar from '@/components/Navbar'

const statusSteps = [
  { label: 'Order Placed', icon: Package, date: '21 Mar, 2024' },
  { label: 'Cutting', icon: Scissors, date: '22 Mar, 2024' },
  { label: 'Stitching', icon: Search, date: 'In Progress' },
  { label: 'Trial', icon: Clock, date: 'Pending' },
  { label: 'Ready for Delivery', icon: CheckCircle2, date: 'Expected 25 Mar' }
]

export default function TrackOrder() {
  const [orderId, setOrderId] = useState('')
  const [tracking, setTracking] = useState(false)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', paddingTop: '100px' }}>
      <div className="container">
        <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Track Your <span style={{ color: 'var(--primary)' }}>Masterpiece</span></h1>
          <p style={{ opacity: 0.6 }}>Enter your order ID below to get real-time updates on your stitching progress.</p>
        </header>

        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="card" style={{ display: 'flex', gap: '1rem', padding: '1rem', borderRadius: '24px', marginBottom: '4rem' }}>
            <input 
              type="text" 
              placeholder="Enter Order ID (e.g., #ORD-1025)" 
              style={{ flex: 1, border: 'none', background: 'none', padding: '0.5rem 1rem', outline: 'none', fontSize: '1rem' }}
              onChange={(e) => setOrderId(e.target.value)}
            />
            <button 
              onClick={() => setTracking(true)} 
              className="btn-primary" 
              style={{ padding: '0.8rem 1.5rem', borderRadius: '16px' }}
            >
              Track Order
            </button>
          </div>

          {tracking && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem' }}>Order #{orderId || '1025'}</h3>
                  <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Customer: Anjali V. | Lehenga Stitching</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ color: 'var(--primary)', fontWeight: 600 }}>Status: STITCHING</p>
                  <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Updated 2 hours ago</p>
                </div>
              </div>

              <div style={{ position: 'relative', paddingLeft: '3rem' }}>
                {/* Vertical Progress Line */}
                <div style={{ 
                  position: 'absolute', 
                  left: '14px', 
                  top: '10px', 
                  bottom: '10px', 
                  width: '2px', 
                  background: 'var(--border)',
                  zIndex: 0
                }}></div>

                {statusSteps.map((s, i) => {
                  const isActive = i <= 2;
                  const isCurrent = i === 2;
                  return (
                    <div key={s.label} style={{ position: 'relative', marginBottom: '2.5rem', opacity: isActive ? 1 : 0.4 }}>
                      <div style={{ 
                        position: 'absolute', 
                        left: '-44px', 
                        top: '0', 
                        width: '30px', 
                        height: '30px', 
                        background: isActive ? 'var(--primary)' : 'white', 
                        border: '2px solid var(--primary)', 
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isActive ? 'white' : 'var(--primary)',
                        zIndex: 1,
                        boxShadow: isCurrent ? '0 0 15px rgba(225, 29, 72, 0.5)' : 'none'
                      }}>
                        <s.icon size={16} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{s.label}</h4>
                        <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>{s.date}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'rgba(225, 29, 72, 0.05)', borderRadius: '16px', display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <Navigation size={24} style={{ color: 'var(--primary)' }} />
                <div>
                  <h5 style={{ fontSize: '1rem' }}>Upcoming Milestone: Trial Session</h5>
                  <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>Our executive will bring the dress to your home for a trial fit tomorrow morning.</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}
