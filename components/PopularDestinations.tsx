const destinations = [
  {
    icon: '🕌',
    name: 'Agra',
    description: 'Taj Mahal & Mughal heritage',
    whatsapp: 'https://wa.me/919810325525?text=Hi%2C%20I%20want%20to%20book%20a%20trip%20to%20Agra.',
  },
  {
    icon: '🏰',
    name: 'Jaipur',
    description: 'Pink City forts & palaces',
    whatsapp: 'https://wa.me/919810325525?text=Hi%2C%20I%20want%20to%20book%20a%20trip%20to%20Jaipur.',
  },
  {
    icon: '🛕',
    name: 'Haridwar',
    description: 'Holy Ganga aarti & temples',
    whatsapp: 'https://wa.me/919810325525?text=Hi%2C%20I%20want%20to%20book%20a%20trip%20to%20Haridwar.',
  },
  {
    icon: '⛰️',
    name: 'Shimla',
    description: 'Hills, pine forests, toy train',
    whatsapp: 'https://wa.me/919810325525?text=Hi%2C%20I%20want%20to%20book%20a%20trip%20to%20Shimla.',
  },
  {
    icon: '🪷',
    name: 'Mathura',
    description: "Krishna's birthplace & ghats",
    whatsapp: 'https://wa.me/919810325525?text=Hi%2C%20I%20want%20to%20book%20a%20trip%20to%20Mathura.',
  },
  {
    icon: '🌊',
    name: 'Manali',
    description: 'Snow peaks & adventure',
    whatsapp: 'https://wa.me/919810325525?text=Hi%2C%20I%20want%20to%20book%20a%20trip%20to%20Manali.',
  },
]

export default function PopularDestinations() {
  return (
    <section className="py-20 bg-[var(--cream)]" aria-labelledby="destinations-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase mb-2">
            POPULAR DESTINATIONS
          </p>
          <h2 id="destinations-heading" className="font-heading text-3xl sm:text-4xl font-bold text-[var(--navy)] text-balance">
            Discover India with us
          </h2>
          <div className="w-16 h-1 bg-[var(--gold)] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {destinations.map((dest) => (
            <a
              key={dest.name}
              href={dest.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-[var(--navy)] rounded-2xl p-5 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col items-center gap-3"
              aria-label={`Book trip to ${dest.name} — ${dest.description}`}
            >
              <span className="text-3xl" aria-hidden="true">{dest.icon}</span>
              <h3 className="font-heading font-bold text-[var(--navy)] group-hover:text-white text-sm transition-colors">
                {dest.name}
              </h3>
              <p className="text-[var(--muted-foreground)] group-hover:text-white/60 text-xs leading-tight transition-colors">
                {dest.description}
              </p>
              <span className="text-[var(--gold)] text-xs font-semibold mt-auto">
                Book this trip →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
