import Image from 'next/image'
import { Phone } from 'lucide-react'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/driver-photo.png"
              alt="Shree Radhe Travels — Professional chauffeur and vehicle"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-4 left-4 bg-[var(--gold)] text-white px-4 py-2 rounded-xl shadow font-semibold text-sm">
              10+ Years of Trusted Service
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase mb-2">
              ABOUT US
            </p>
            <h2 id="about-heading" className="font-heading text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-5 text-balance">
              Your Trusted Travel Partner from New Delhi
            </h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
              Shree Radhe Travels has been operating since 2014, providing premium taxi services,
              airport transfers, outstation trips and curated tour packages across India from our base in New Delhi.
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
                className="flex items-center gap-2 bg-[var(--navy)] hover:bg-[var(--gold)] text-white font-semibold px-5 py-3 rounded-full transition-colors text-sm"
              >
                <Phone size={15} />
                Call Us Now
              </a>
              <a
                href="#contact"
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
