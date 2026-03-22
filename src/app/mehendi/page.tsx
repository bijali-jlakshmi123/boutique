'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, Search, Filter, Wand2, Calendar } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const designs = [
  { id: 1, title: 'Bridal Perfection', category: 'Bridal', price: '₹12,000', image: '/mehendi.png' },
  { id: 2, title: 'Arabic Elegance', category: 'Arabic', price: '₹3,500', image: '/mehendi2.png' },
  { id: 3, title: 'Minimalist Floral', category: 'Simple', price: '₹1,500', image: '/mehendi.png' },
  { id: 4, title: 'Royal Heritage', category: 'Bridal', price: '₹15,000', image: '/mehendi2.png' },
  { id: 5, title: 'Contemporary Bliss', category: 'Engagement', price: '₹5,500', image: '/mehendi.png' },
  { id: 6, title: 'Floral Fusion', category: 'Arabic', price: '₹4,000', image: '/mehendi2.png' },
]

export default function MehendiGallery() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', paddingTop: '100px' }}>
      <div className="container">
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Artistic <span style={{ color: 'var(--primary)' }}>Henna Designs</span></h1>
            <p style={{ opacity: 0.6 }}>Explore our curated collection of traditional and modern mehendi patterns.</p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="card" style={{ padding: '0.75rem 1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <Filter size={18} />
              <span>Filter by Category</span>
            </div>
          </div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2.5rem' }}>
          {designs.map((d, i) => (
            <motion.div 
              key={d.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="card"
              style={{ padding: 0, overflow: 'hidden' }}
            >
              <div style={{ position: 'relative', height: '350px' }}>
                <Image src={d.image} alt={d.title} layout="fill" objectFit="cover" />
                <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                  <button style={{ background: 'white', color: 'var(--primary)', padding: '0.5rem', borderRadius: '50%', boxShadow: 'var(--shadow)' }}>
                    <Heart size={20} />
                  </button>
                </div>
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', background: 'rgba(0,0,0,0.5)', color: 'white', padding: '0.4rem 0.8rem', borderRadius: '8px', fontSize: '0.75rem', backdropFilter: 'blur(4px)' }}>
                   {d.category}
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.25rem' }}>{d.title}</h3>
                  <span style={{ fontWeight: 700, color: 'var(--primary)' }}>{d.price}</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Link href="/book-mehendi" className="btn-primary" style={{ flex: 1, textAlign: 'center', fontSize: '0.9rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <Calendar size={16} /> Book Design
                  </Link>
                  <button style={{ padding: '0.75rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'white' }}>
                    <Search size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
