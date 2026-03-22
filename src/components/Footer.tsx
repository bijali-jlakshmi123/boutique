'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone, Heart } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname();

  // Hide Footer on Admin & Login pages
  if (pathname?.startsWith('/admin') || pathname === '/login') {
    return null;
  }
  return (
    <footer style={{ padding: '4rem 0 2rem', background: 'var(--background)', color: 'var(--foreground)', position: 'relative', borderTop: '1px solid rgba(241, 228, 193, 0.1)' }}>
      {/* Decorative background circle */}
      <div style={{ position: 'absolute', right: '-10%', bottom: '-20%', width: '400px', height: '400px', borderRadius: '50%', background: 'var(--primary)', opacity: 0.1, filter: 'blur(100px)' }} />

      <div style={{ padding: '0 4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', marginBottom: '6rem' }}>
          {/* Brand Info */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
              <div style={{ position: 'relative', width: '40px', height: '40px', borderRadius: '12px', overflow: 'hidden', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/logo.png" alt="Samira" layout="fill" objectFit="cover" style={{ mixBlendMode: 'multiply' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1' }}>
                <span className="brand" style={{ fontSize: '1.8rem', fontWeight: '800', letterSpacing: '-0.05em', color: 'var(--foreground)' }}>Samira</span>
                <span style={{ fontSize: '0.65rem', fontWeight: '600', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.5, color: 'var(--foreground)' }}>Boutique Collective</span>
              </div>
            </Link>
            <p style={{ opacity: 0.8, marginBottom: '2.5rem', lineHeight: '1.8', color: 'var(--foreground)' }}>
              Experience the fusion of heritage and modern design. From delicate mehendi art to bespoke stitching, 
              Samira is your premium destination for boutique excellence.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <SocialBtn icon={<Instagram size={20} />} />
              <SocialBtn icon={<Facebook size={20} />} />
              <SocialBtn icon={<Twitter size={20} />} />
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '2rem', fontWeight: 600, color: 'var(--foreground)' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', opacity: 0.9 }}>
              <li><Link href="/mehendi">Mehendi Designs</Link></li>
              <li><Link href="/stitching">Stitching Services</Link></li>
              <li><Link href="/track">Track Your Order</Link></li>
              <li><Link href="/book-mehendi">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '2rem', fontWeight: 600, color: 'var(--foreground)' }}>Get in Touch</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', opacity: 0.9 }}>
              <li style={{ display: 'flex', gap: '1rem' }}><MapPin size={20} className="text-primary" style={{ color: 'var(--primary)' }} /> 123 Designer Street, Fashion Hub, India</li>
              <li style={{ display: 'flex', gap: '1rem' }}><Phone size={20} style={{ color: 'var(--primary)' }} /> +91 98765 43210</li>
              <li style={{ display: 'flex', gap: '1rem' }}><Mail size={20} style={{ color: 'var(--primary)' }} /> contact@samira.com</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '2rem', fontWeight: 600, color: 'var(--foreground)' }}>Newsletter</h4>
            <p style={{ opacity: 0.8, fontSize: '0.9rem', marginBottom: '1.5rem' }}>Stay updated with our latest collections and offers.</p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <input 
                placeholder="Your Email" 
                style={{ flex: 1, padding: '1rem', borderRadius: '12px', border: '1px solid rgba(241, 228, 193, 0.2)', background: 'rgba(255,255,255,0.03)', color: 'var(--foreground)' }}
              />
              <button className="btn-primary" style={{ padding: '0.8rem 1.2rem' }}>Join</button>
            </div>
          </div>
        </div>

        <div style={{ 
          paddingTop: '3rem', 
          borderTop: '1px solid rgba(241, 228, 193, 0.05)', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: '1rem'
        }}>
          <p style={{ opacity: 0.5, fontSize: '0.9rem' }}>© 2024 Samira Boutique. All rights reserved.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', opacity: 0.4 }}>
            Made with <Heart size={14} style={{ fill: 'var(--primary)', color: 'var(--primary)' }} /> for traditional excellence
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialBtn({ icon }: { icon: React.ReactNode }) {
  return (
    <button style={{ 
      background: 'rgba(255,255,255,0.03)', 
      color: 'var(--foreground)', 
      padding: '0.8rem', 
      borderRadius: '12px',
      border: '1px solid rgba(241, 228, 193, 0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }} className="hover-scale">
      {icon}
    </button>
  )
}
