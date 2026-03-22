'use client'
import { motion } from 'framer-motion'
import { Settings, User, Bell, Shield, Smartphone, Globe, Save } from 'lucide-react'

export default function AdminSettings() {
  return (
    <div>
      <header style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '0.8rem' }}>Control <span style={{ color: 'var(--primary)' }}>Center</span></h1>
        <p style={{ opacity: 0.5, fontSize: '1.25rem' }}>Configure your boutique's operational parameters and security.</p>
      </header>

      <div style={{ maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <section className="card" style={{ padding: '3.5rem', background: '#1e293b', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Profile Configuration</h2>
                <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.8rem 2rem' }}>
                   <Save size={18} /> Update
                </button>
             </div>
             
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                   <label style={{ fontSize: '0.85rem', fontWeight: 700, opacity: 0.5 }}>Full Admin Name</label>
                   <input defaultValue="Samira Boutique Admin" style={{ width: '100%', padding: '1.2rem', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', color: 'white', fontWeight: 600 }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                   <label style={{ fontSize: '0.85rem', fontWeight: 700, opacity: 0.5 }}>Official Email</label>
                   <input defaultValue="admin@samira.com" style={{ width: '100%', padding: '1.2rem', borderRadius: '14px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', color: 'white', fontWeight: 600 }} />
                </div>
             </div>
        </section>

        <section className="card" style={{ padding: '3.5rem', background: '#1e293b', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px' }}>
             <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '3.5rem' }}>Boutique Operational Settings</h2>
             
             <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <SettingRow icon={<Bell size={20} />} title="New Order Notifications" desc="Get real-time WhatsApp and push alerts for mehendi and stitching orders." enabled />
                <SettingRow icon={<Shield size={20} />} title="Advanced Security" desc="Enable Two-Factor Authentication for boutique owner login." enabled />
                <SettingRow icon={<Globe size={20} />} title="Public Visibility" desc="Keep your mehendi gallery visible to new visitors." enabled />
             </div>
        </section>
      </div>
    </div>
  )
}

function SettingRow({ icon, title, desc, enabled }: { icon: React.ReactNode, title: string, desc: string, enabled?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', background: 'rgba(255,255,255,0.02)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.03)' }}>
       <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <div style={{ color: 'var(--primary)', background: 'rgba(225,29,72,0.1)', padding: '1rem', borderRadius: '14px' }}>{icon}</div>
          <div>
             <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'white' }}>{title}</h4>
             <p style={{ opacity: 0.5, fontSize: '0.85rem' }}>{desc}</p>
          </div>
       </div>
       <div style={{ width: '60px', height: '32px', background: enabled ? 'var(--primary)' : 'rgba(255,255,255,0.1)', borderRadius: '99px', position: 'relative', cursor: 'pointer' }}>
          <div style={{ position: 'absolute', right: enabled ? '4px' : 'auto', left: enabled ? 'auto' : '4px', top: '4px', width: '24px', height: '24px', background: 'white', borderRadius: '50%' }} />
       </div>
    </div>
  )
}
