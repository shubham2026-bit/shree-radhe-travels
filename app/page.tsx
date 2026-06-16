import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import TrustBar from '@/components/TrustBar'
import AboutSection from '@/components/AboutSection'
import TourPackages from '@/components/TourPackages'
import ServicesAndWhyUs from '@/components/ServicesAndWhyUs'
import OurFleet from '@/components/OurFleet'
import PopularDestinations from '@/components/PopularDestinations'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <TourPackages />
        <ServicesAndWhyUs />
        <OurFleet />
        <PopularDestinations />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
