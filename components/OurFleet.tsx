import Link from 'next/link'

const WA_FLEET =
  'https://wa.me/919310209227?text=Hi%2C%20I%20want%20to%20book%20the%20vehicle%20for%20my%20trip.%20Please%20share%20availability%2C%20pricing%2C%20and%20vehicle%20details.'

const WA_SVG = (
  <svg className="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.122 1.523 5.857L0 24l6.335-1.502A11.966 11.966 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.032-1.384l-.361-.214-3.735.884.924-3.649-.236-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
  </svg>
)

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
        {/* Fleet CTA banner — for any other vehicle type */}
        <div className="mt-12 bg-[var(--cream)] border border-[var(--border)] rounded-2xl p-8 text-center">
          <p className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase mb-2">
            Need a different vehicle?
          </p>
          <h3 className="font-heading text-2xl font-bold text-[var(--navy)] mb-2 text-balance">
            Bus, Mini-Bus or Any Other Vehicle?
          </h3>
          <p className="text-[var(--muted-foreground)] text-sm mb-6 max-w-md mx-auto">
            WhatsApp or call us for buses, mini-buses, luxury cars and more — or fill in the enquiry form and we&apos;ll arrange the right vehicle for you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={WA_FLEET}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              aria-label="WhatsApp to book a vehicle"
            >
              {WA_SVG}
              WhatsApp Us
            </a>
            <a
              href="tel:9810325525"
              className="flex items-center gap-2 bg-[var(--navy)] hover:bg-[var(--gold)] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              aria-label="Call 9810325525 to book a vehicle"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call 9810325525
            </a>
            <Link
              href="/enquiry"
              className="bg-white border border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              Fill Enquiry Form
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
