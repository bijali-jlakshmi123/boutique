'use client'
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Search, ChevronRight } from 'lucide-react'

export default function AdminAppointments() {
  const appointments = [
    { id: 1, customer: 'Riya Malhotra', service: 'Engagement Mehendi', time: '10:00 AM', date: '23 Mar, 2024', status: 'UPCOMING' },
    { id: 2, customer: 'Sneha Jain', service: 'Bridal Trial', time: '02:30 PM', date: '23 Mar, 2024', status: 'UPCOMING' },
    { id: 3, customer: 'Anjali V.', service: 'Casual Stitching', time: '04:00 PM', date: '21 Mar, 2024', status: 'COMPLETED' },
  ]

  return (
    <div>
      <header style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0.8rem' }}>Artisan <span style={{ color: 'var(--primary)' }}>Schedule</span></h1>
        <p style={{ opacity: 0.5, fontSize: '1.25rem' }}>Coordinate Mehendi and Stitching appointments with clinical precision.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
        {appointments.map((a, i) => (
          <motion.div 
            key={a.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="card"
            style={{ 
              padding: '2.5rem', 
              background: '#1e293b', 
              border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: '24px', 
              position: 'relative',
              overflow: 'hidden'
            }}
          >
             <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 900, color: a.status === 'UPCOMING' ? 'var(--primary)' : 'rgba(255,255,255,0.3)', padding: '0.4rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '99px' }}>
                   {a.status}
                </div>
             </div>
             
             <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '2.5rem' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '18px', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: 'var(--primary)', fontSize: '1.4rem' }}>{a.customer[0]}</div>
                <div>
                   <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{a.customer}</h3>
                   <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>{a.service}</p>
                </div>
             </div>

             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                   <Calendar size={18} style={{ color: 'rgba(255,255,255,0.4)' }} />
                   <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{a.date}</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                   <Clock size={18} style={{ color: 'rgba(255,255,255,0.4)' }} />
                   <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{a.time}</p>
                </div>
             </div>

             <button style={{ 
               width: '100%', 
               padding: '1rem', 
               borderRadius: '12px', 
               background: 'rgba(255,255,255,0.05)', 
               color: 'white', 
               fontWeight: 700,
               fontSize: '0.9rem',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'center',
               gap: '0.8rem'
             }}>
                Reschedule <ChevronRight size={16} />
             </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
