'use client'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Heart, Search, Filter, Wand2, Calendar, Share2, ZoomIn } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

const paperDesigns = [
  { id: 1, title: 'Heritage Bridal Sketch', artist: 'Samira Executive', style: 'Bridal', image: '/paper1.png' },
  { id: 2, title: 'Arabic Floral Draft', artist: 'Samira Executive', style: 'Arabic', image: '/paper2.png' },
  { id: 3, title: 'Minimalist Vine', artist: 'Artisan Team', style: 'Minimal', image: '/mehendi.png' },
  { id: 4, title: 'Royal Mandala', artist: 'Samira Executive', style: 'Traditional', image: '/mehendi2.png' },
  { id: 5, title: 'Jaipur Series #4', artist: 'Artisan Team', style: 'Marwadi', image: '/paper1.png' },
  { id: 6, title: 'Modern Fusion', artist: 'Samira Executive', style: 'Fusion', image: '/paper2.png' },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<any>(null)
  
  return (
    <div style={{ minHeight: '100vh', background: 'var(--background)', paddingTop: '140px', paddingBottom: '100px' }}>
      <div className="container">
        {/* 🎨 Artistic Header */}
        <header style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '1rem', 
              background: 'rgba(225, 29, 72, 0.1)', 
              padding: '0.8rem 1.5rem', 
              borderRadius: '999px',
              color: 'var(--primary)',
              fontSize: '0.8rem',
              fontWeight: 900,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '2rem'
            }}
          >
            <Wand2 size={16} /> The Artisan's Canvas
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ fontSize: '5rem', fontWeight: 900, marginBottom: '2rem', letterSpacing: '-0.02em' }}
          >
            Mehendi on <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Artisan Paper</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}
          >
            Explore the raw drafts and high-art sketches that breathe life into your boutique experience. 
            Pure hand-drawn patterns on premium textured paper. Click any masterpiece to enlarge.
          </motion.p>
        </header>

        {/* 🖼️ Grid of Masterpieces */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '4rem' }}>
          {paperDesigns.map((design, i) => (
            <GalleryItem key={design.id} design={design} index={i} onSelect={setSelectedImage} />
          ))}
        </div>

        {/* 🔮 Expanded Visual Modal (Lightbox) */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'fixed',
                inset: 0,
                zIndex: 1000,
                background: 'rgba(0,0,0,0.95)',
                backdropFilter: 'blur(15px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4rem',
                cursor: 'zoom-out'
              }}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                style={{ 
                  position: 'relative', 
                  width: '100%', 
                  maxWidth: '1200px', 
                  height: '80vh',
                  borderRadius: '32px',
                  overflow: 'hidden',
                  boxShadow: '0 100px 200px -50px rgba(0,0,0,1)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image 
                  src={selectedImage.image} 
                  alt={selectedImage.title} 
                  fill 
                  style={{ objectFit: 'contain' }} 
                />
                
                {/* Modal Controls Bar */}
                <div style={{
                  position: 'absolute',
                  bottom: '2rem',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  padding: '1.5rem 3rem',
                  borderRadius: '999px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2.5rem',
                  color: 'white'
                }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800 }}>{selectedImage.title}</h3>
                    <p style={{ fontSize: '0.75rem', opacity: 0.6 }}>Design by {selectedImage.artist}</p>
                  </div>
                  <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.1)' }} />
                  <button className="btn-primary" style={{ padding: '0.8rem 2rem', borderRadius: '12px' }}>Book Design</button>
                  <button onClick={() => setSelectedImage(null)} style={{ opacity: 0.6, fontWeight: 700 }}>Close View</button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🔮 "Start Your Masterpiece" CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ 
            marginTop: '10rem', 
            padding: '6rem', 
            background: 'var(--foreground)', 
            borderRadius: '60px', 
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
           <Image src="/paper1.png" fill style={{ objectFit: 'cover', opacity: 0.05 }} alt="Pattern" />
           <div style={{ position: 'relative', zIndex: 10 }}>
              <h2 style={{ fontSize: '3.5rem', color: 'white', marginBottom: '2rem' }}>Ready for Your <span style={{ color: 'var(--primary)' }}>Live Design?</span></h2>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
                Transform these paper drafts into your bridal memory. Book your exclusive session today.
              </p>
              <Link href="/book-mehendi" className="btn-primary" style={{ padding: '1.5rem 4rem', fontSize: '1.1rem' }}>
                 Begin Reservation
              </Link>
           </div>
        </motion.div>
      </div>
    </div>
  )
}

function GalleryItem({ design, index, onSelect }: { design: any; index: number; onSelect: (d: any) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index % 3 * 0.1 }}
      style={{ position: 'relative' }}
      whileHover={{ y: -15 }}
      onClick={() => onSelect(design)}
    >
      <div style={{ 
        position: 'relative', 
        height: '600px', 
        borderRadius: '40px', 
        overflow: 'hidden',
        background: '#1a050d',
        border: '1px solid rgba(255,255,255,0.05)',
        boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
        cursor: 'zoom-in'
      }}>
        <Image 
          src={design.image} 
          alt={design.title} 
          fill 
          style={{ objectFit: 'cover', opacity: 0.9 }} 
        />
        
        {/* Glass Overlay UI */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', 
          padding: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          gap: '1rem'
        }}>
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                 <span style={{ 
                   background: 'var(--primary)', 
                   padding: '0.4rem 0.8rem', 
                   borderRadius: '8px', 
                   fontSize: '0.7rem', 
                   fontWeight: 900, 
                   color: 'white',
                   textTransform: 'uppercase',
                   marginBottom: '1rem',
                   display: 'inline-block'
                 }}>
                   {design.style}
                 </span>
                 <h3 style={{ fontSize: '1.6rem', color: 'white', fontWeight: 800 }}>{design.title}</h3>
                 <p style={{ opacity: 0.5, fontSize: '0.85rem' }}>Drafted by {design.artist}</p>
              </div>
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                 <button style={{ 
                   width: '45px', 
                   height: '45px', 
                   borderRadius: '12px', 
                   background: 'rgba(255,255,255,0.05)', 
                   backdropFilter: 'blur(10px)',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   color: 'white'
                 }}>
                   <Heart size={20} />
                 </button>
                 <button style={{ 
                   width: '45px', 
                   height: '45px', 
                   borderRadius: '12px', 
                   background: 'var(--primary)', 
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   color: 'white'
                 }}>
                   <Share2 size={20} />
                 </button>
              </div>
           </div>
        </div>
      </div>
    </motion.div>
  )
}
