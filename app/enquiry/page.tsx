"use client";

import { useState } from "react";
import { Send, CheckCircle, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const WA_NUMBER = "919310209227";
const WA_MESSAGE =
  "Hi%2C%20Shree%20Radhe%20Travels!%20%F0%9F%91%8B%0A%0AI%20am%20interested%20in%20your%20travel%20services.%20Please%20share%20more%20details%20about%20your%20tour%20packages%2C%20hotel%20bookings%2C%20and%20travel%20options.%0A%0AThank%20you.";

export default function EnquiryPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service_type: "",
    pickup: "",
    drop: "",
    travel_date: "",
    travel_time: "",
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
        setForm({
          name: "", phone: "", email: "", service_type: "",
          pickup: "", drop: "", travel_date: "", travel_time: "",
          passengers: "", message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-2.5 rounded-lg border border-[var(--border)] bg-white text-[var(--foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--navy)]/30 placeholder:text-[var(--muted-foreground)]";

  return (
    <>
      <Navbar />
      <main>
        {/* Hero banner */}
        <section className="bg-[var(--navy)] pt-32 pb-12 text-center text-white">
          <div className="max-w-2xl mx-auto px-4">
            <h1 className="font-heading text-3xl sm:text-4xl font-bold mb-3 text-balance">
              Send Us Your Enquiry
            </h1>
            <p className="text-white/70 text-sm mb-8">
              Share your trip details and we&apos;ll get back in 30 minutes with the best quote.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:9810325525"
                className="flex items-center gap-2 bg-white/10 border border-white/25 hover:bg-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
                aria-label="Call 9810325525"
              >
                <Phone size={15} />
                9810325525
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
                aria-label="WhatsApp us on +91 93102 09227"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.122 1.523 5.857L0 24l6.335-1.502A11.966 11.966 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.032-1.384l-.361-.214-3.735.884.924-3.649-.236-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182c5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Form card */}
        <section className="bg-[var(--cream)] py-16">
          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-md border border-[var(--border)] p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center gap-5 py-10 text-center">
                  <CheckCircle className="w-16 h-16 text-[var(--gold)]" />
                  <h2 className="font-heading text-2xl font-bold text-[var(--navy)]">
                    Enquiry Received!
                  </h2>
                  <p className="text-[var(--muted-foreground)] text-sm max-w-sm leading-relaxed">
                    Thank you for your enquiry. Our team will contact you shortly to assist with your
                    travel requirements. For immediate assistance, call{" "}
                    <a href="tel:9810325525" className="font-semibold text-[var(--navy)]">
                      9810325525
                    </a>{" "}
                    or chat with us on WhatsApp at{" "}
                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[var(--navy)]"
                    >
                      +91 93102 09227
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2.5 bg-[var(--navy)] text-white rounded-full text-sm font-semibold hover:bg-[var(--gold)] hover:text-[var(--navy)] transition-colors"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h2 className="font-heading text-xl font-bold text-[var(--navy)]">
                    Trip Details
                  </h2>

                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="enq-name" className="text-sm font-medium text-[var(--foreground)]">
                        Full Name *
                      </label>
                      <input
                        id="enq-name" name="name" type="text" required
                        value={form.name} onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="enq-phone" className="text-sm font-medium text-[var(--foreground)]">
                        Mobile Number *
                      </label>
                      <input
                        id="enq-phone" name="phone" type="tel" required
                        value={form.phone} onChange={handleChange}
                        placeholder="10-digit mobile"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="enq-email" className="text-sm font-medium text-[var(--foreground)]">
                      Email Address *
                    </label>
                    <input
                      id="enq-email" name="email" type="email" required
                      value={form.email} onChange={handleChange}
                      placeholder="you@email.com"
                      className={inputClass}
                    />
                  </div>

                  {/* Row 3 */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="enq-service" className="text-sm font-medium text-[var(--foreground)]">
                      Service Type *
                    </label>
                    <select
                      id="enq-service" name="service_type" required
                      value={form.service_type} onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select service type</option>
                      <option value="Taxi">Taxi</option>
                      <option value="Outstation Cab">Outstation Cab</option>
                      <option value="Airport Transfer">Airport Transfer</option>
                      <option value="Tour Package">Tour Package</option>
                      <option value="Pilgrimage Tour">Pilgrimage Tour</option>
                      <option value="Tempo Traveller">Tempo Traveller</option>
                      <option value="Bus / Coach Hire">Bus / Coach Hire</option>
                      <option value="Corporate Travel">Corporate Travel</option>
                    </select>
                  </div>

                  {/* Row 4 */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="enq-pickup" className="text-sm font-medium text-[var(--foreground)]">
                        Pickup Location *
                      </label>
                      <input
                        id="enq-pickup" name="pickup" type="text" required
                        value={form.pickup} onChange={handleChange}
                        placeholder="e.g. RK Puram, Delhi"
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="enq-drop" className="text-sm font-medium text-[var(--foreground)]">
                        Drop Location
                      </label>
                      <input
                        id="enq-drop" name="drop" type="text"
                        value={form.drop} onChange={handleChange}
                        placeholder="e.g. Agra"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Row 5 */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="enq-date" className="text-sm font-medium text-[var(--foreground)]">
                        Travel Date
                      </label>
                      <input
                        id="enq-date" name="travel_date" type="date"
                        value={form.travel_date} onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="enq-time" className="text-sm font-medium text-[var(--foreground)]">
                        Travel Time
                      </label>
                      <input
                        id="enq-time" name="travel_time" type="time"
                        value={form.travel_time} onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="enq-passengers" className="text-sm font-medium text-[var(--foreground)]">
                        Passengers
                      </label>
                      <input
                        id="enq-passengers" name="passengers" type="number"
                        min="1" max="50"
                        value={form.passengers} onChange={handleChange}
                        placeholder="e.g. 4"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Row 6 */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="enq-message" className="text-sm font-medium text-[var(--foreground)]">
                      Special Requirements
                    </label>
                    <textarea
                      id="enq-message" name="message" rows={3}
                      value={form.message} onChange={handleChange}
                      placeholder="Any preferences, stops, or extras..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-500">
                      Something went wrong. Please try again or{" "}
                      <a href="tel:9810325525" className="underline font-semibold">
                        call 9810325525
                      </a>
                      .
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-[var(--gold)] text-white rounded-lg font-semibold hover:bg-amber-600 disabled:opacity-60 transition-colors text-sm"
                  >
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
                  <p className="text-center text-xs text-[var(--muted-foreground)]">
                    We&apos;ll respond within 30 minutes. Or call{" "}
                    <a href="tel:9810325525" className="font-semibold text-[var(--navy)]">
                      9810325525
                    </a>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
