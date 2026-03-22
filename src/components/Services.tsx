'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Scissors, Calendar, Wand2, Package, Search, Heart } from 'lucide-react'

const services = [
  {
    title: 'Mehendi Art',
    desc: 'Bespoke henna patterns for bridal and festive occasions. Book your slot online.',
    icon: Wand2,
    image: '/mehendi.png',
    link: '/mehendi'
  },
  {
    title: 'Custom Stitching',
    desc: 'Tell us your measurements and upload a reference. We handle the rest.',
    icon: Scissors,
    image: '/hero.png',
    link: '/stitching'
  }
]

export default function Services() {
  return (
    <section style={{ padding: '8rem 0', background: 'var(--background)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Premium <span style={{ color: 'var(--primary)' }}>Offerings</span></h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', opacity: 0.7 }}>
            Experience digital excellence in boutique management. Everything from booking to tracking, right at your fingertips.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
          {services.map((s, i) => (
            <motion.div 
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="card"
              style={{ padding: 0, overflow: 'hidden' }}
            >
              <div style={{ height: '240px', position: 'relative' }}>
                <Image src={s.image} alt={s.title} layout="fill" objectFit="cover" />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', background: 'var(--primary)', color: 'white', padding: '0.5rem', borderRadius: '12px' }}>
                  <s.icon size={24} />
                </div>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{s.title}</h3>
                <p style={{ opacity: 0.7, marginBottom: '2rem', minHeight: '3rem' }}>{s.desc}</p>
                <a href={s.link} className="btn-primary" style={{ width: '100%', display: 'inline-block', textAlign: 'center' }}>
                  Explore Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
