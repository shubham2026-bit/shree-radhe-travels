import Image from 'next/image'

const packages = [
  {
    title: 'Golden Triangle',
    subtitle: 'DELHI · AGRA · JAIPUR',
    badge: 'MOST POPULAR',
    description: "Explore India's Heritage",
    image: '/images/golden-triangle.png',
    whatsapp: 'https://wa.me/919310209227?text=Hi%2C%20I%20want%20to%20book%20a%20trip%20to%20Golden%20Triangle%20(Delhi%20%C2%B7%20Agra%20%C2%B7%20Jaipur).%20Please%20share%20package%20details%2C%20pricing%2C%20and%20availability.',
  },
  {
    title: 'Himalayan Escape',
    subtitle: 'SHIMLA · MANALI · KASOL',
    badge: 'TRENDING',
    description: 'Hills, snow & pine forests',
    image: '/images/himalayan-escape.png',
    whatsapp: 'https://wa.me/919310209227?text=Hi%2C%20I%20want%20to%20book%20a%20trip%20to%20Himalayan%20Escape%20(Shimla%20%C2%B7%20Manali%20%C2%B7%20Kasol).%20Please%20share%20package%20details%2C%20pricing%2C%20and%20availability.',
  },
  {
    title: 'Spiritual Journey',
    subtitle: 'HARIDWAR · RISHIKESH · MATHURA',
    badge: 'SACRED',
    description: 'Aarti, temples & ghats',
    image: '/images/spiritual-journey.png',
    whatsapp: 'https://wa.me/919310209227?text=Hi%2C%20I%20want%20to%20book%20a%20trip%20to%20Spiritual%20Journey%20(Haridwar%20%C2%B7%20Rishikesh%20%C2%B7%20Mathura).%20Please%20share%20package%20details%2C%20pricing%2C%20and%20availability.',
  },
  {
    title: 'Royal Rajasthan',
    subtitle: 'UDAIPUR · JODHPUR · JAISALMER',
    badge: 'LUXURY',
    description: 'Forts, palaces & deserts',
    image: '/images/royal-rajasthan.png',
    whatsapp: 'https://wa.me/919310209227?text=Hi%2C%20I%20want%20to%20book%20a%20trip%20to%20Royal%20Rajasthan%20(Udaipur%20%C2%B7%20Jodhpur%20%C2%B7%20Jaisalmer).%20Please%20share%20package%20details%2C%20pricing%2C%20and%20availability.',
  },
  {
    title: 'Kashmir Paradise',
    subtitle: 'SRINAGAR · GULMARG · PAHALGAM',
    badge: 'PREMIUM',
    description: 'Dal Lake & alpine meadows',
    image: '/images/kashmir-paradise.png',
    whatsapp: 'https://wa.me/919310209227?text=Hi%2C%20I%20want%20to%20book%20a%20trip%20to%20Kashmir%20Paradise%20(Srinagar%20%C2%B7%20Gulmarg%20%C2%B7%20Pahalgam).%20Please%20share%20package%20details%2C%20pricing%2C%20and%20availability.',
  },
  {
    title: 'Char Dham Yatra',
    subtitle: 'YAMUNOTRI · GANGOTRI · KEDARNATH · BADRINATH',
    badge: 'PILGRIMAGE',
    description: 'Sacred pilgrimage circuit',
    image: '/images/char-dham.png',
    whatsapp: 'https://wa.me/919310209227?text=Hi%2C%20I%20want%20to%20book%20a%20trip%20for%20Char%20Dham%20Yatra%20(Yamunotri%20%C2%B7%20Gangotri%20%C2%B7%20Kedarnath%20%C2%B7%20Badrinath).%20Please%20share%20package%20details%2C%20pricing%2C%20and%20availability.',
  },
]

const badgeColors: Record<string, string> = {
  'MOST POPULAR': 'bg-orange-500',
  'TRENDING': 'bg-purple-600',
  'SACRED': 'bg-yellow-600',
  'LUXURY': 'bg-rose-600',
  'PREMIUM': 'bg-blue-700',
  'PILGRIMAGE': 'bg-teal-700',
}

export default function TourPackages() {
  return (
    <section id="packages" className="py-20 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase mb-2">
            Wonderful Place For You
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--navy)] text-balance">
            TOUR CATEGORIES
          </h2>
          <div className="w-16 h-1 bg-[var(--gold)] mx-auto mt-4 rounded-full" />
        </div>

        {/* Package grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <a
              key={pkg.title}
              href={pkg.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              aria-label={`${pkg.title} — ${pkg.subtitle}`}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f3d]/80 via-transparent to-transparent" />
                {/* Badge */}
                <span
                  className={`absolute top-3 right-3 ${badgeColors[pkg.badge] ?? 'bg-gray-700'} text-white text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full`}
                >
                  {pkg.badge}
                </span>
                {/* Title overlay */}
                <div className="absolute bottom-3 left-4">
                  <h3 className="font-heading font-bold text-white text-lg leading-tight">{pkg.title}</h3>
                  <p className="text-white/70 text-[10px] tracking-wider font-medium">{pkg.subtitle}</p>
                </div>
              </div>

              {/* Card body */}
              <div className="p-4 flex flex-col flex-1 justify-between">
                <p className="font-heading italic text-[var(--gold)] text-sm mb-3">{pkg.description}</p>
                <span className="text-[var(--navy)] font-semibold text-sm group-hover:text-[var(--gold)] transition-colors">
                  Explore Package →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
