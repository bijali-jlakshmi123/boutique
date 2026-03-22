'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Scissors, Calendar, User, Search, ShoppingBag, LayoutDashboard, Clock, DollarSign, TrendingUp, Users, Settings, LogOut, Bell, Sparkles, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function AdminOverview() {
  const stats = [
    { label: 'Revenue', value: '₹1.8L', icon: DollarSign, trend: '+24%', color: '#10b981' },
    { label: 'Live Orders', value: '32', icon: ShoppingBag, trend: '8 New', color: '#3b82f6' },
    { label: 'Upcoming', value: '12', icon: Calendar, trend: 'Today', color: '#f59e0b' },
    { label: 'Growth', value: '18%', icon: TrendingUp, trend: 'Monthly', color: 'var(--primary)' },
  ]

  const recentOrders = [
    { id: '#SAM-2041', customer: 'Priya Verma', service: 'Bridal Mehendi', status: 'CONFIRMED', time: 'Just Now', total: '₹12,000' },
    { id: '#SAM-2042', customer: 'Anisha K.', service: 'Lehenga Stitching', status: 'STITCHING', time: '45m ago', total: '₹8,500' },
    { id: '#SAM-2043', customer: 'Meera Rajput', service: 'Evening Blouse', status: 'CUTTING', time: '2h ago', total: '₹2,200' },
    { id: '#SAM-2044', customer: 'Sita Ramani', service: 'Arabic Mehendi', status: 'PENDING', time: '5h ago', total: '₹3,500' },
  ]

  return (
    <div>
      <header style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '0.8rem' }}>Executive <span style={{ color: 'var(--primary)' }}>Hub</span></h1>
        <p style={{ opacity: 0.5, fontSize: '1.25rem' }}>Your boutique's real-time heartbeat. Manage with precision.</p>
      </header>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', marginBottom: '5rem' }}>
        {stats.map((s, i) => (
          <motion.div 
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="card"
            style={{ 
              padding: '2.5rem', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem', 
              background: '#1e293b',
              border: '1px solid rgba(255,255,255,0.05)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ background: `${s.color}25`, color: s.color, padding: '0.8rem', borderRadius: '12px' }}>
                <s.icon size={22} />
              </div>
              <div style={{ fontSize: '0.8rem', color: s.color, background: `${s.color}25`, padding: '0.3rem 0.6rem', borderRadius: '99px', fontWeight: 700 }}>
                {s.trend}
              </div>
            </div>
            <div>
              <p style={{ fontSize: '0.85rem', opacity: 0.5, marginBottom: '0.4rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</p>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'white' }}>{s.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
        {/* Activity Table */}
        <div className="card" style={{ padding: '3rem', background: '#1e293b', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '0.4rem' }}>Live Activity Hub</h2>
              <p style={{ opacity: 0.5, fontSize: '0.9rem' }}>Comprehensive real-time order stream.</p>
            </div>
            <button style={{ color: 'var(--primary)', fontWeight: 700, background: 'none', fontSize: '0.9rem' }}>See Full Logs</button>
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', opacity: 0.4, fontSize: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <th style={{ paddingBottom: '1.5rem' }}>CLIENT & SERVICE</th>
                <th style={{ paddingBottom: '1.5rem' }}>STATUS</th>
                <th style={{ paddingBottom: '1.5rem' }}>TOTAL</th>
                <th style={{ paddingBottom: '1.5rem' }}>TIMESTAMP</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((o) => (
                <tr key={o.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '1.8rem 0' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: 'var(--primary)', fontSize: '1.1rem' }}>{o.customer[0]}</div>
                      <div>
                        <p style={{ fontWeight: 800 }}>{o.customer}</p>
                        <p style={{ fontSize: '0.8rem', opacity: 0.5, color: 'var(--primary)' }}>{o.service}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      padding: '0.4rem 1rem', 
                      borderRadius: '999px',
                      background: getStatusColor(o.status) + '15',
                      color: getStatusColor(o.status),
                      fontWeight: 800,
                      letterSpacing: '0.05em'
                    }}>
                      {o.status}
                    </span>
                  </td>
                  <td style={{ fontWeight: 800, color: 'white' }}>{o.total}</td>
                  <td style={{ opacity: 0.4, fontSize: '0.8rem' }}>{o.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Alerts Sidebar Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <div className="card" style={{ padding: '3.5rem 3rem', background: 'var(--primary)', color: 'white', border: 'none', boxShadow: '0 30px 60px rgba(225, 29, 72, 0.4)', borderRadius: '32px' }}>
             <Star size={40} style={{ marginBottom: '1.5rem', opacity: 0.7 }} />
             <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Executive Insight</h3>
             <p style={{ opacity: 0.9, fontSize: '1rem', marginBottom: '2.5rem', lineHeight: '1.7', fontWeight: 500 }}>
               You have 4 bridal commissions for tomorrow. Ensure all premium threads and mehendi stocks are verified by 5 PM today.
             </p>
             <button style={{ 
               width: '100%', 
               padding: '1.25rem', 
               borderRadius: '16px', 
               background: 'white', 
               color: 'var(--primary)', 
               fontWeight: 900,
               fontSize: '1rem',
               boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
             }}>
               Verify Readiness
             </button>
          </div>

          <div className="card" style={{ padding: '3rem', background: '#1e293b', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px' }}>
             <h4 style={{ fontSize: '1.2rem', marginBottom: '2rem', fontWeight: 700 }}>Critical Measurement Alerts</h4>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <AlertSmall title="Meera Rajput" desc="Updated measurements uploaded for Lehnga #2043." />
                <AlertSmall title="Anjali Sharma" desc="Pending final trial scheduling for Gown #1982." />
                <AlertSmall title="Rupali V." desc="New reference design attached to Order #2055." />
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SideItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <li style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '1.2rem', 
      padding: '1.2rem 1.5rem', 
      borderRadius: '16px',
      background: active ? 'var(--primary)' : 'transparent',
      color: active ? 'white' : 'rgba(255,255,255,0.6)',
      fontWeight: active ? 700 : 500,
      cursor: 'pointer',
      transition: 'all 0.3s'
    }} className="hover-scale">
      {icon}
      <span>{label}</span>
      {active && <motion.div layoutId="side-active" style={{ marginLeft: 'auto', width: '6px', height: '6px', background: 'white', borderRadius: '50%' }} />}
    </li>
  )
}

function AlertSmall({ title, desc }: { title: string, desc: string }) {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <div style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%' }} />
      <div>
        <p style={{ fontWeight: 700, fontSize: '0.9rem' }}>{title}</p>
        <p style={{ fontSize: '0.75rem', opacity: 0.5 }}>{desc}</p>
      </div>
    </div>
  )
}

function getStatusColor(status: string) {
  switch (status) {
    case 'CONFIRMED': return '#10b981'
    case 'STITCHING': return '#3b82f6'
    case 'CUTTING': return '#f59e0b'
    case 'PENDING': return '#ef4444'
    default: return '#64748b'
  }
}
