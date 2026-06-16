import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Tour Packages", href: "#packages" },
  { label: "Our Fleet", href: "#fleet" },
  { label: "Destinations", href: "#destinations" },
  { label: "Contact Us", href: "#contact" },
];

const services = [
  "Cab / Taxi Service",
  "Tempo Traveller Hire",
  "Bus / Coach Hire",
  "Airport Transfers",
  "Pilgrimage Tours",
  "Customised Holiday Packages",
  "Corporate Travel",
  "All-India Tour Packages",
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold flex-shrink-0 bg-white">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-06-13%20at%2011.09.34-UATcik1pT7fY7VkrnsoEH3y1VObYcH.jpeg"
                  alt="Shree Radhe Travels logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-lg leading-tight text-white" style={{ fontFamily: 'var(--font-heading)' }}>Shree Radhe</p>
                <p className="text-gold text-sm font-medium">Travels</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Your trusted travel partner for 15+ years, offering premium cab services, tour packages, and pilgrimage journeys across India.
            </p>
            <div className="flex gap-3">
              {[
                {
                  href: "#",
                  label: "Facebook",
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  ),
                },
                {
                  href: "#",
                  label: "Instagram",
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                      <circle cx="17.5" cy="6.5" r="1.5" />
                    </svg>
                  ),
                },
                {
                  href: "#",
                  label: "YouTube",
                  svg: (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy transition-colors text-white">
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gold mb-5">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-white/70 hover:text-gold text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gold mb-5">Our Services</h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s} className="text-white/70 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gold mb-5">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="tel:+919876543210" className="flex items-start gap-3 group">
                  <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 group-hover:text-gold text-sm transition-colors">
                    +91 98765 43210
                  </span>
                </a>
              </li>
              <li>
                <a href="mailto:info@shreeradhetravels.com" className="flex items-start gap-3 group">
                  <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 group-hover:text-gold text-sm transition-colors">
                    info@shreeradhetravels.com
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Mathura, Uttar Pradesh, India — 281001
                </span>
              </li>
            </ul>

            <a
              href="https://wa.me/919876543210?text=Hi%20Shree%20Radhe%20Travels%2C%20I%20need%20help%20with%20a%20trip."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.122 1.523 5.857L0 24l6.335-1.502A11.966 11.966 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.032-1.384l-.361-.214-3.735.884.924-3.649-.236-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/50 text-xs">
          <p>&copy; {new Date().getFullYear()} Shree Radhe Travels. All rights reserved.</p>
          <p>Designed &amp; built with care for travellers across India.</p>
        </div>
      </div>
    </footer>
  );
}
