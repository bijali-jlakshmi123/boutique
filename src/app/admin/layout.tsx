'use client'
import { motion } from 'framer-motion'
import { Scissors, Calendar, User, ShoppingBag, LayoutDashboard, Clock, DollarSign, TrendingUp, Users, Settings, LogOut, Bell, Sparkles, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Overview", href: "/admin" },
    { icon: <ShoppingBag size={20} />, label: "Orders", href: "/admin/orders" },
    { icon: <Calendar size={20} />, label: "Appointments", href: "/admin/appointments" },
    { icon: <Users size={20} />, label: "Customers", href: "/admin/customers" },
    { icon: <Settings size={20} />, label: "Settings", href: "/admin/settings" },
  ]

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', display: 'flex', color: 'white' }}>
      {/* 🔮 Executive Sidebar */}
      <aside style={{ 
        width: '320px', 
        background: '#1e293b', 
        borderRight: '1px solid rgba(255,255,255,0.05)', 
        padding: '3rem 2rem', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '4rem', 
        position: 'sticky', 
        top: 0, 
        height: '100vh' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ background: 'var(--primary)', padding: '0.6rem', borderRadius: '12px', width: '45px', height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(225,29,72,0.3)' }}>
            <Image src="/logo.png" alt="Samira" width={28} height={28} />
          </div>
          <span className="brand" style={{ fontSize: '2rem', color: 'white' }}>Samira</span>
        </div>

        <nav style={{ flex: 1 }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {menuItems.map((item) => {
              const active = pathname === item.href
              return (
                <li key={item.label}>
                  <Link href={item.href} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '1.2rem', 
                    padding: '1.2rem 1.5rem', 
                    borderRadius: '16px',
                    background: active ? 'rgba(225,29,72,0.1)' : 'transparent',
                    color: active ? 'var(--primary)' : 'rgba(255,255,255,0.5)',
                    fontWeight: active ? 700 : 500,
                    transition: 'all 0.3s',
                    position: 'relative'
                  }} className="hover-scale">
                    {item.icon}
                    <span>{item.label}</span>
                    {active && <motion.div layoutId="nav-active" style={{ position: 'absolute', right: '1.5rem', width: '6px', height: '6px', background: 'var(--primary)', borderRadius: '50%' }} />}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <button style={{ 
          background: 'rgba(239, 68, 68, 0.1)', 
          color: '#ef4444', 
          border: '1px solid rgba(239, 68, 68, 0.1)', 
          padding: '1.2rem', 
          borderRadius: '16px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem', 
          width: '100%', 
          fontWeight: 700 
        }} onClick={() => window.location.href = '/'}>
          <LogOut size={20} />
          Sign Out
        </button>
      </aside>

      {/* 🚀 Main Content Shell */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <header style={{ 
          padding: '2rem 5rem', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          background: 'rgba(30, 41, 59, 0.5)',
          backdropFilter: 'blur(20px)',
          position: 'sticky',
          top: 0,
          zIndex: 40
        }}>
           <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <Sparkles size={24} className="text-primary" />
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Management Dashboard</h2>
           </div>
           
           <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
             <div style={{ position: 'relative', opacity: 0.6 }}>
               <Bell size={24} />
               <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%' }} />
             </div>
             <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)' }} />
             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.9rem' }}>Samira Executive</p>
                  <p style={{ fontSize: '0.75rem', opacity: 0.5 }}>Owner Account</p>
                </div>
                <div style={{ width: '45px', height: '45px', borderRadius: '14px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>S</div>
             </div>
           </div>
        </header>

        <main style={{ padding: '4rem 5rem', flex: 1 }}>
          {children}
        </main>
      </div>
    </div>
  )
}
