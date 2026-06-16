'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Packages', href: '#packages' },
  { label: 'Hotel', href: '#hotel' },
  { label: 'Gallery', href: '#gallery' },
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
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-3 group"
          aria-label="Shree Radhe Travels — Home"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[var(--gold)] bg-white shadow">
            <Image
              src="/logo.svg"
              alt="Shree Radhe Travels logo"
              width={48}
              height={48}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="leading-tight">
            <p
              className={`font-heading font-bold text-base leading-none ${
                isScrolled ? 'text-[var(--navy)]' : 'text-white'
              }`}
            >
              Shree Radhe Travels
            </p>
            <p
              className={`text-[10px] tracking-widest font-medium ${
                isScrolled ? 'text-[var(--gold)]' : 'text-[var(--gold)]'
              }`}
            >
              SAFE · COMFORTABLE · RELIABLE
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[var(--gold)] ${
                  isScrolled ? 'text-[var(--navy)]' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:9810325525"
            className="flex items-center gap-2 bg-[var(--gold)] text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-amber-600 transition-colors shadow"
            aria-label="Call us at 9810325525"
          >
            <Phone size={15} strokeWidth={2.5} />
            Call 9810325525
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className={`md:hidden p-2 rounded-md ${isScrolled ? 'text-[var(--navy)]' : 'text-white'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[var(--navy)] text-white px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium py-2 border-b border-white/10 hover:text-[var(--gold)] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:9810325525"
            className="flex items-center justify-center gap-2 bg-[var(--gold)] text-white text-sm font-semibold px-4 py-3 rounded-full mt-2"
          >
            <Phone size={15} />
            Call 9810325525
          </a>
        </div>
      )}
    </header>
  )
}
