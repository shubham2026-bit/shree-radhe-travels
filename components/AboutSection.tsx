import { Phone } from 'lucide-react'

const LOGO_URL =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-13%20at%2011.09.34-3gauNzYgBaldVKBiBtoulaDqtulLpU.jpeg'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Logo panel */}
          <div className="flex flex-col items-center gap-6">
            <div
              className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[var(--gold)] shadow-2xl bg-white"
              style={{ flexShrink: 0 }}
            >
              {/* Plain <img> with external blob URL — never breaks after deployment */}
              <img
                src={LOGO_URL}
                alt="Shree Radhe Travels official logo"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {['Licensed Operator', 'GPS-Tracked Fleet', '24 / 7 Support'].map((badge) => (
                <span
                  key={badge}
                  className="bg-[var(--cream)] border border-[var(--gold)]/50 text-[var(--navy)] text-xs font-semibold px-4 py-1.5 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase mb-2">
              ABOUT US
            </p>
            <h2 id="about-heading" className="font-heading text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-5 text-balance">
              Your Trusted Travel Partner Since 2014
            </h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              Shree Radhe Travels has been operating since 2014, providing premium taxi services,
              airport transfers, outstation trips and curated tour packages across India —
              based in the holy city of Mathura, Uttar Pradesh.
            </p>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
              Our fleet includes sanitized sedans, SUVs, Innova Crystas and Tempo Travellers, all driven by
              trained, polite and GPS-tracked chauffeurs. We believe in transparent pricing — no hidden charges, ever.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '5000+', label: 'Happy Customers' },
                { value: '50+', label: 'Cities Covered' },
                { value: '24/7', label: 'Support Available' },
              ].map((stat) => (
                <div key={stat.label} className="bg-[var(--cream)] rounded-xl p-4 text-center">
                  <p className="font-heading font-bold text-2xl text-[var(--navy)]">{stat.value}</p>
                  <p className="text-[var(--muted-foreground)] text-xs font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:9810325525"
                className="flex items-center gap-2 bg-[var(--navy)] hover:bg-[var(--gold)] hover:text-[var(--navy)] text-white font-semibold px-5 py-3 rounded-full transition-colors text-sm"
                aria-label="Call Shree Radhe Travels on 9810325525"
              >
                <Phone size={15} />
                Call 9810325525
              </a>
              <a
                href="/#contact"
                className="border-2 border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white font-semibold px-5 py-3 rounded-full transition-colors text-sm"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
