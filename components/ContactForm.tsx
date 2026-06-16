"use client";

import { useState } from "react";
import { MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "",
    travel_date: "",
    passengers: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New Travel Enquiry from ${form.name} — Shree Radhe Travels`,
          from_name: "Shree Radhe Travels Website",
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", destination: "", travel_date: "", passengers: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[var(--navy)] text-balance">
            Plan Your Perfect Journey
          </h2>
          <div className="w-16 h-1 bg-[var(--gold)] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-[var(--muted-foreground)] max-w-xl mx-auto text-sm">
            Tell us your dream destination and we&apos;ll craft an unforgettable experience tailored just for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-[var(--navy)] text-white rounded-2xl p-8 flex flex-col gap-6">
              {[
                {
                  icon: <Phone className="w-5 h-5" />,
                  label: "Call Us",
                  value: "+91 98103 25525",
                  href: "tel:+919810325525",
                },
                {
                  icon: <Phone className="w-5 h-5" />,
                  label: "WhatsApp",
                  value: "+91 93102 09227",
                  href: "https://wa.me/919310209227?text=Hi%2C%20Shree%20Radhe%20Travels!%20%F0%9F%91%8B%0A%0AI%20am%20interested%20in%20your%20travel%20services.%20Please%20share%20more%20details%20about%20your%20tour%20packages%2C%20hotel%20bookings%2C%20and%20travel%20options.%0A%0AThank%20you.",
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  label: "Our Office",
                  value: "Sector-6, RK Puram, New Delhi, India",
                  href: "https://maps.app.goo.gl/AnEinrU2xPMPaMPg6",
                },
                {
                  icon: <Clock className="w-5 h-5" />,
                  label: "Working Hours",
                  value: "24 / 7 — Always Available",
                  href: "#",
                },
              ].map((item) => (
                <a key={item.label} href={item.href} className="flex items-start gap-4 group">
                  <div className="mt-0.5 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[var(--gold)] flex-shrink-0 group-hover:bg-[var(--gold)] group-hover:text-[var(--navy)] transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wide">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden h-64 border border-[var(--border)] shadow-sm">
              <iframe
                title="Shree Radhe Travels — Sector-6, RK Puram, New Delhi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.663!2d77.1855!3d28.5635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d5f2db34fa5%3A0x3a2c7f56c24c10e0!2sSector%206%2C%20RK%20Puram%2C%20New%20Delhi%2C%20Delhi%20110022!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing Shree Radhe Travels office at Sector-6, RK Puram, New Delhi"
              />
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="lg:col-span-3 bg-[var(--cream)] rounded-2xl p-8 border border-[var(--border)] shadow-sm">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <CheckCircle className="w-16 h-16 text-[var(--gold)]" />
                <h3 className="font-heading text-2xl font-bold text-[var(--navy)]">Enquiry Sent!</h3>
                <p className="text-[var(--muted-foreground)] max-w-sm text-sm">
                  Thank you for your enquiry. Our team will contact you shortly to assist with your
                  travel requirements. For immediate assistance, call{" "}
                  <a href="tel:9810325525" className="font-semibold text-[var(--navy)]">9810325525</a>{" "}
                  or chat with us on WhatsApp at{" "}
                  <a href="https://wa.me/919310209227?text=Hi%2C%20Shree%20Radhe%20Travels!%20%F0%9F%91%8B%0A%0AI%20am%20interested%20in%20your%20travel%20services.%20Please%20share%20more%20details%20about%20your%20tour%20packages%2C%20hotel%20bookings%2C%20and%20travel%20options.%0A%0AThank%20you." target="_blank" rel="noopener noreferrer" className="font-semibold text-[var(--navy)]">+91 93102 09227</a>.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 px-6 py-2.5 bg-[var(--navy)] text-white rounded-full text-sm font-semibold hover:bg-[var(--gold)] transition-colors"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-heading text-xl font-bold text-[var(--navy)]">Send an Enquiry</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-[var(--foreground)]">Full Name *</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                      placeholder="Your full name"
                      className="px-4 py-2.5 rounded-lg border border-[var(--border)] bg-white text-[var(--foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--navy)]/30 placeholder:text-[var(--muted-foreground)]" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-sm font-medium text-[var(--foreground)]">Phone / WhatsApp *</label>
                    <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="px-4 py-2.5 rounded-lg border border-[var(--border)] bg-white text-[var(--foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--navy)]/30 placeholder:text-[var(--muted-foreground)]" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-[var(--foreground)]">Email Address</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="you@email.com"
                      className="px-4 py-2.5 rounded-lg border border-[var(--border)] bg-white text-[var(--foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--navy)]/30 placeholder:text-[var(--muted-foreground)]" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="passengers" className="text-sm font-medium text-[var(--foreground)]">No. of Passengers</label>
                    <select id="passengers" name="passengers" value={form.passengers} onChange={handleChange}
                      className="px-4 py-2.5 rounded-lg border border-[var(--border)] bg-white text-[var(--foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--navy)]/30">
                      <option value="">Select</option>
                      {["1", "2", "3-4", "5-7", "8-12", "13+"].map((n) => (
                        <option key={n} value={n}>{n} person(s)</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="destination" className="text-sm font-medium text-[var(--foreground)]">Destination *</label>
                    <input id="destination" name="destination" type="text" required value={form.destination} onChange={handleChange}
                      placeholder="e.g. Manali, Shimla, Char Dham"
                      className="px-4 py-2.5 rounded-lg border border-[var(--border)] bg-white text-[var(--foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--navy)]/30 placeholder:text-[var(--muted-foreground)]" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="travel_date" className="text-sm font-medium text-[var(--foreground)]">Travel Date</label>
                    <input id="travel_date" name="travel_date" type="date" value={form.travel_date} onChange={handleChange}
                      className="px-4 py-2.5 rounded-lg border border-[var(--border)] bg-white text-[var(--foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--navy)]/30" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-[var(--foreground)]">Special Requirements</label>
                  <textarea id="message" name="message" rows={3} value={form.message} onChange={handleChange}
                    placeholder="Any specific requirements, preferred vehicle, hotel category, etc."
                    className="px-4 py-2.5 rounded-lg border border-[var(--border)] bg-white text-[var(--foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--navy)]/30 placeholder:text-[var(--muted-foreground)] resize-none" />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500">
                    Something went wrong. Please try again or{" "}
                    <a href="tel:9810325525" className="underline font-semibold">call 9810325525</a>.
                  </p>
                )}

                <button type="submit" disabled={status === "loading"}
                  className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-[var(--navy)] text-white rounded-full font-semibold hover:bg-[var(--gold)] hover:text-[var(--navy)] disabled:opacity-60 transition-colors">
                  {status === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Enquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
