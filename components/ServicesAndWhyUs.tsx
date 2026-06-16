import { Car, MapPin, Plane, Package, Building2, Users } from 'lucide-react'

const services = [
  {
    icon: Car,
    title: 'Taxi Services',
    description: 'Local taxis across Delhi NCR — hourly and per-km packages.',
  },
  {
    icon: MapPin,
    title: 'Local & Outstation',
    description: 'One-way or round trips to nearby cities and beyond.',
  },
  {
    icon: Plane,
    title: 'Airport Transfers',
    description: 'Punctual pickup & drop for IGI Airport, 24/7.',
  },
  {
    icon: Package,
    title: 'Tour Packages',
    description: 'Curated holiday packages — Golden Triangle, hills & more.',
  },
  {
    icon: Building2,
    title: 'Corporate Travel',
    description: 'Monthly billing, dedicated cars for businesses.',
  },
  {
    icon: Users,
    title: 'Group Travel',
    description: 'Tempo Travellers for large groups, families and pilgrimages.',
  },
]

const whyUs = [
  {
    icon: '🛡️',
    title: 'Safety First',
    desc: 'Verified drivers, GPS-tracked cars, regular maintenance.',
  },
  {
    icon: '⏰',
    title: 'Always On Time',
    desc: 'Punctual pickups and timely drops — guaranteed.',
  },
  {
    icon: '🏆',
    title: 'Decade of Trust',
    desc: '10+ years serving families, corporates and tourists.',
  },
  {
    icon: '👨‍✈️',
    title: 'Experienced Drivers',
    desc: 'Polite, well-trained chauffeurs who know the routes.',
  },
  {
    icon: '🚗',
    title: 'Clean, Comfortable Fleet',
    desc: 'Regularly sanitized sedans, SUVs & tempo travellers.',
  },
  {
    icon: '✨',
    title: 'Premium Experience',
    desc: 'Personal attention, flexible plans.',
  },
]

export default function ServicesAndWhyUs() {
  return (
    <>
      {/* Services Section */}
      <section className="py-20 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase mb-2">
              OUR SERVICES
            </p>
            <h2 id="services-heading" className="font-heading text-3xl sm:text-4xl font-bold text-[var(--navy)] text-balance">
              Travel solutions for every journey
            </h2>
            <div className="w-16 h-1 bg-[var(--gold)] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <div
                key={svc.title}
                className="group bg-[var(--cream)] hover:bg-[var(--navy)] rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--navy)] group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors">
                  <svc.icon size={22} className="text-[var(--gold)]" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-[var(--navy)] group-hover:text-white mb-2 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-[var(--muted-foreground)] group-hover:text-white/70 text-sm leading-relaxed transition-colors">
                  {svc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[var(--navy)]" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase mb-2">
              WHY CHOOSE US
            </p>
            <h2 id="why-heading" className="font-heading text-3xl sm:text-4xl font-bold text-white text-balance">
              Built on trust, driven by service
            </h2>
            <div className="w-16 h-1 bg-[var(--gold)] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-[var(--gold)]/30"
              >
                <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="font-heading font-semibold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
