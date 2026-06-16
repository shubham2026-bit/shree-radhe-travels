const testimonials = [
  {
    quote:
      "Reliable service for our team's daily commute. On time, every time. Shree Radhe Travels' drivers are very professional.",
    name: 'Rohit Sharma',
    role: 'Corporate client',
    stars: 5,
  },
  {
    quote:
      'Booked an Innova for our Golden Triangle tour. Driver was courteous, car was spotless. Highly recommended!',
    name: 'Priya Verma',
    role: 'Family trip — Jaipur',
    stars: 5,
  },
  {
    quote:
      '3 AM IGI pickup, driver was waiting 15 minutes early. This is the kind of service that builds trust.',
    name: 'Amit Kumar',
    role: 'Airport transfer',
    stars: 5,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[var(--gold)] text-sm" aria-hidden="true">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-[var(--navy)]" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase mb-2">
            TESTIMONIALS
          </p>
          <h2 id="testimonials-heading" className="font-heading text-3xl sm:text-4xl font-bold text-white text-balance">
            What our travellers say
          </h2>
          <div className="w-16 h-1 bg-[var(--gold)] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="bg-white/5 border border-white/10 hover:border-[var(--gold)]/30 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:bg-white/10"
            >
              <Stars count={t.stars} />
              <p className="text-white/80 text-sm leading-relaxed italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-[var(--gold)] text-xs">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
