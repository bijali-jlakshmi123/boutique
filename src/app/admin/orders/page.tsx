'use client'
import { motion } from 'framer-motion'
import { ShoppingBag, Search, Filter, ArrowRight, Package } from 'lucide-react'

export default function AdminOrders() {
  const orders = [
    { id: '#SAM-2041', customer: 'Priya Verma', service: 'Bridal Mehendi', status: 'CONFIRMED', time: 'Just Now', total: '₹12,000' },
    { id: '#SAM-2042', customer: 'Anisha K.', service: 'Lehenga Stitching', status: 'STITCHING', time: '45m ago', total: '₹8,500' },
    { id: '#SAM-2045', customer: 'Sara Khan', service: 'Blouse Customization', status: 'CUTTING', time: '1h ago', total: '₹2,500' },
  ]

  return (
    <div>
      <header style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0.8rem' }}>Live <span style={{ color: 'var(--primary)' }}>Orders</span></h1>
          <p style={{ opacity: 0.5, fontSize: '1.25rem' }}>Track and manage every boutique commission.</p>
        </div>
        
        <div style={{ display: 'flex', gap: '1.5rem' }}>
           <div style={{ background: '#1e293b', padding: '1rem 1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
              <Search size={18} opacity={0.4} />
              <input placeholder="Search orders..." style={{ background: 'none', border: 'none', color: 'white', outline: 'none' }} />
           </div>
           <button style={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.05)', padding: '1rem 1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Filter size={18} /> Filter
           </button>
        </div>
      </header>

      <div className="card" style={{ background: '#1e293b', padding: '3rem', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px' }}>
         <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left', opacity: 0.4, fontSize: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <th style={{ paddingBottom: '1.5rem' }}>ORDER ID</th>
                <th style={{ paddingBottom: '1.5rem' }}>CUSTOMER</th>
                <th style={{ paddingBottom: '1.5rem' }}>SERVICE</th>
                <th style={{ paddingBottom: '1.5rem' }}>STATUS</th>
                <th style={{ paddingBottom: '1.5rem' }}>TOTAL</th>
                <th style={{ paddingBottom: '1.5rem' }}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '2rem 0', fontWeight: 700 }}>{o.id}</td>
                  <td style={{ fontWeight: 800 }}>{o.customer}</td>
                  <td style={{ color: 'var(--primary)', fontWeight: 600 }}>{o.service}</td>
                  <td>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      padding: '0.4rem 1rem', 
                      borderRadius: '999px',
                      background: 'rgba(255,255,255,0.05)',
                      color: 'white',
                      fontWeight: 700
                    }}>
                      {o.status}
                    </span>
                  </td>
                  <td style={{ fontWeight: 800 }}>{o.total}</td>
                  <td>
                    <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontWeight: 700 }}>
                      View Details <ArrowRight size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
         </table>
      </div>
    </div>
  )
}
