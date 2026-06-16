const fleet = [
  {
    icon: '🚗',
    name: 'Sedan',
    capacity: '4 passengers',
    models: ['Dzire / Etios', 'AC', 'Boot space'],
    whatsapp: 'https://wa.me/919310209227?text=Hi%2C%20I%20want%20to%20book%20this%20vehicle%20for%20my%20trip%20(Sedan%20-%20Dzire%2FEtios).%20Please%20share%20availability%2C%20pricing%2C%20and%20vehicle%20details.',
  },
  {
    icon: '🚙',
    name: 'SUV',
    capacity: '6 passengers',
    models: ['Ertiga / XL6', 'Spacious', 'Comfortable'],
    whatsapp: 'https://wa.me/919310209227?text=Hi%2C%20I%20want%20to%20book%20this%20vehicle%20for%20my%20trip%20(SUV%20-%20Ertiga%2FXL6).%20Please%20share%20availability%2C%20pricing%2C%20and%20vehicle%20details.',
  },
  {
    icon: '🚐',
    name: 'Innova Crysta',
    capacity: '7 passengers',
    models: ['Premium ride', 'Captain seats', 'Long trips'],
    whatsapp: 'https://wa.me/919310209227?text=Hi%2C%20I%20want%20to%20book%20this%20vehicle%20for%20my%20trip%20(Innova%20Crysta).%20Please%20share%20availability%2C%20pricing%2C%20and%20vehicle%20details.',
  },
  {
    icon: '🚌',
    name: 'Tempo Traveller',
    capacity: '12–17 passengers',
    models: ['Group travel', 'Push-back seats', 'AC'],
    whatsapp: 'https://wa.me/919310209227?text=Hi%2C%20I%20want%20to%20book%20this%20vehicle%20for%20my%20trip%20(Tempo%20Traveller).%20Please%20share%20availability%2C%20pricing%2C%20and%20vehicle%20details.',
  },
]

export default function OurFleet() {
  return (
    <section id="fleet" className="py-20 bg-white" aria-labelledby="fleet-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase mb-2">
            OUR FLEET
          </p>
          <h2 id="fleet-heading" className="font-heading text-3xl sm:text-4xl font-bold text-[var(--navy)] text-balance">
            Clean, modern cars for every group size
          </h2>
          <div className="w-16 h-1 bg-[var(--gold)] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleet.map((car) => (
            <div
              key={car.name}
              className="bg-[var(--cream)] rounded-2xl p-6 flex flex-col gap-4 border border-[var(--border)] hover:border-[var(--gold)] hover:shadow-md transition-all duration-300"
            >
              <div className="text-5xl text-center" aria-hidden="true">{car.icon}</div>
              <div className="text-center">
                <h3 className="font-heading font-bold text-[var(--navy)] text-xl">{car.name}</h3>
                <p className="text-[var(--gold)] text-sm font-medium mt-1">{car.capacity}</p>
              </div>
              <ul className="flex flex-col gap-1.5">
                {car.models.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                    <span className="text-[var(--gold)] font-bold text-xs">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={car.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block text-center bg-[var(--navy)] hover:bg-[var(--gold)] text-white text-sm font-semibold py-2.5 rounded-xl transition-colors"
                aria-label={`Book ${car.name} via WhatsApp`}
              >
                Book via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
