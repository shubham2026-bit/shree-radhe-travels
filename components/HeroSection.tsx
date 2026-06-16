import { Phone, MessageCircle } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        aria-hidden="true"
      />
      {/* Dark overlay gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#0f1f3d]/90 via-[#1a3a6b]/70 to-[#0f1f3d]/50"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Hero copy */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="text-[var(--gold)] text-sm font-medium">✦ Trusted since 2014</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6">
              Safe, Comfortable{' '}
              <span className="text-[var(--gold)] italic">&</span>{' '}
              Reliable Travel
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-xl">
              Premium taxi, airport transfers, outstation trips and curated tour packages across India — operated from New Delhi with experienced chauffeurs.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#contact"
                className="bg-[var(--gold)] hover:bg-amber-600 text-white font-semibold px-7 py-3 rounded-full transition-colors shadow-lg"
              >
                Book Now
              </a>
              <a
                href="tel:9810325525"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-5 py-3 rounded-full transition-colors backdrop-blur-sm"
                aria-label="Call 9810325525"
              >
                <Phone size={16} />
                9810325525
              </a>
              <a
                href="https://wa.me/919810325525"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-full transition-colors shadow-lg"
                aria-label="WhatsApp Us"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 max-w-sm">
              {[
                { value: '10+', label: 'YEARS' },
                { value: '5000+', label: 'TRIPS' },
                { value: '50+', label: 'CITIES' },
                { value: '24/7', label: 'SUPPORT' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-heading font-bold text-2xl text-[var(--gold)]">{stat.value}</p>
                  <p className="text-white/60 text-[10px] tracking-wider font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Quick Enquiry Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-white shadow-2xl">
            <h2 className="font-heading font-semibold text-xl text-[var(--gold)] mb-1">Quick Enquiry</h2>
            <p className="text-white/70 text-sm mb-5">Tell us where, we&apos;ll arrange the ride.</p>
            <ul className="space-y-2.5 mb-6">
              {[
                'Licensed & insured cars',
                'Trained, polite chauffeurs',
                'No hidden charges',
                'On-time pickup, every time',
                '24/7 customer support',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-white/90">
                  <span className="text-[var(--gold)] font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="block w-full text-center bg-[var(--gold)] hover:bg-amber-600 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
            >
              Get a Quote →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
