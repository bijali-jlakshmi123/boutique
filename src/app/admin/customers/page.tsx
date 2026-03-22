'use client'
import { motion } from 'framer-motion'
import { Users, Search, Star, MessageSquare, ArrowUpRight } from 'lucide-react'

export default function AdminCustomers() {
  const customers = [
    { id: 1, name: 'Priya Verma', email: 'priya@gmail.com', orders: 4, spent: '₹48,000', status: 'ELITE' },
    { id: 2, name: 'Sara Khan', email: 'sara@gmail.com', orders: 2, spent: '₹14,200', status: 'ACTIVE' },
    { id: 3, name: 'Anisha K.', email: 'anisha@gmail.com', orders: 1, spent: '₹8,500', status: 'ACTIVE' },
  ]

  return (
    <div>
      <header style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0.8rem' }}>Elite <span style={{ color: 'var(--primary)' }}>Network</span></h1>
          <p style={{ opacity: 0.5, fontSize: '1.25rem' }}>Manage your most valued patrons and clinical customer relationships.</p>
        </div>
        
        <div style={{ display: 'flex', gap: '1.5rem' }}>
           <div style={{ background: '#1e293b', padding: '1rem 1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
              <Search size={18} opacity={0.4} />
              <input placeholder="Search customers..." style={{ background: 'none', border: 'none', color: 'white', outline: 'none' }} />
           </div>
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '2.5rem' }}>
        {customers.map((c, i) => (
          <motion.div 
            key={c.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="card"
            style={{ 
              padding: '2.5rem', 
              background: '#1e293b', 
              border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: '24px', 
              position: 'relative'
            }}
          >
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                   <div style={{ width: '65px', height: '65px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 900, color: 'var(--primary)' }}>{c.name[0]}</div>
                   <div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>{c.name}</h3>
                      <p style={{ opacity: 0.5, fontSize: '0.85rem' }}>{c.email}</p>
                   </div>
                </div>
                {c.status === 'ELITE' && <Star size={24} style={{ color: 'var(--primary)', fill: 'var(--primary)', opacity: 0.6 }} />}
             </div>

             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', marginBottom: '2rem' }}>
                <div style={{ textAlign: 'center' }}>
                   <p style={{ fontSize: '0.65rem', opacity: 0.5, fontWeight: 900, textTransform: 'uppercase', marginBottom: '0.4rem' }}>Orders</p>
                   <p style={{ fontSize: '1.1rem', fontWeight: 800 }}>{c.orders}</p>
                </div>
                <div style={{ borderLeft: '1px solid rgba(255,255,255,0.05)', borderRight: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                   <p style={{ fontSize: '0.65rem', opacity: 0.5, fontWeight: 900, textTransform: 'uppercase', marginBottom: '0.4rem' }}>Spent</p>
                   <p style={{ fontSize: '1.1rem', fontWeight: 800 }}>{c.spent}</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                   <p style={{ fontSize: '0.65rem', opacity: 0.5, fontWeight: 900, textTransform: 'uppercase', marginBottom: '0.4rem' }}>Status</p>
                   <p style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--primary)' }}>{c.status}</p>
                </div>
             </div>

             <div style={{ display: 'flex', gap: '1rem' }}>
                <button style={{ flex: 1, padding: '1rem', borderRadius: '12px', background: 'var(--primary)', color: 'white', fontWeight: 800, fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                   View Profile <ArrowUpRight size={16} />
                </button>
                <button style={{ padding: '1rem', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)' }}>
                   <MessageSquare size={20} />
                </button>
             </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
