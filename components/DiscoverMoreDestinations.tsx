const WA_CUSTOM =
  'https://wa.me/919310209227?text=Hi%2C%20I%20would%20like%20to%20plan%20a%20custom%20trip.%20Please%20help%20me%20with%20destination%20options%2C%20pricing%2C%20and%20travel%20arrangements.'

export default function DiscoverMoreDestinations() {
  return (
    <section className="py-20 bg-[var(--navy)]" aria-labelledby="discover-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase mb-3">
          Custom Trips
        </p>
        <h2
          id="discover-heading"
          className="font-heading text-3xl sm:text-4xl font-bold text-white mb-5 text-balance"
        >
          Where Would You Like To Go?
        </h2>
        <div className="w-16 h-1 bg-[var(--gold)] mx-auto mb-6 rounded-full" />
        <p className="text-white/70 text-sm leading-relaxed max-w-xl mx-auto mb-10">
          Don&apos;t see your destination listed? We cover all of India. Tell us where you want to go
          and we&apos;ll plan the perfect trip — custom routes, tailored packages, and the best pricing.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/enquiry"
            className="bg-[var(--gold)] hover:bg-amber-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg text-sm"
          >
            Plan My Journey
          </a>
          <a
            href={WA_CUSTOM}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3.5 rounded-full transition-colors shadow-lg text-sm"
            aria-label="Plan a custom trip via WhatsApp"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.122 1.523 5.857L0 24l6.335-1.502A11.966 11.966 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.032-1.384l-.361-.214-3.735.884.924-3.649-.236-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
