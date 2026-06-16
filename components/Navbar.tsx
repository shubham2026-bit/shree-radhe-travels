'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Packages', href: '#packages' },
  { label: 'Services', href: '#services' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy shadow-md py-2' : 'bg-navy/95 py-3'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-3 group"
          aria-label="Shree Radhe Travels — Home"
        >
          <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border-2 border-gold bg-white shadow">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-13%20at%2011.09.34-UATcik1pT7fY7VkrnsoEH3y1VObYcH.jpeg"
              alt="Shree Radhe Travels logo"
              width={44}
              height={44}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div className="leading-tight hidden sm:block">
            <p className="font-bold text-base text-white leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
              Shree Radhe Travels
            </p>
            <p className="text-[10px] tracking-widest font-medium text-gold">
              SAFE · COMFORTABLE · RELIABLE
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 bg-gold text-navy text-sm font-bold px-4 py-2 rounded-full hover:bg-yellow-500 transition-colors shadow"
            aria-label="Call Shree Radhe Travels"
          >
            <Phone size={15} strokeWidth={2.5} />
            Call Now
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 rounded-md text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10 text-white px-6 py-4 flex flex-col gap-1 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium py-2.5 border-b border-white/10 hover:text-gold transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+919876543210"
            className="flex items-center justify-center gap-2 bg-gold text-navy text-sm font-bold px-4 py-3 rounded-full mt-3"
          >
            <Phone size={15} />
            +91 98765 43210
          </a>
        </div>
      )}
    </header>
  )
}
