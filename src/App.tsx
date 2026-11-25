import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Trust from '@/components/Trust';
import Training from '@/components/Training';
import WhyLearnWithUs from '@/components/WhyLearnWithUs';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import Booking from '@/components/Booking';
import Location from '@/components/Location';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';

function App() {
  const scrollToBook = (preference?: string) => {
    if (preference) {
      window.dispatchEvent(
        new CustomEvent('prefill-booking', { detail: { preference } })
      );
    }
    const el = document.querySelector('#book');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTraining = () => {
    const el = document.querySelector('#training');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream-100">
      <Navbar onBookClick={() => scrollToBook()} />

      <main>
        <Hero
          onBookClick={() => scrollToBook()}
          onExploreClick={scrollToTraining}
        />
        <Trust />
        <Training onEnquire={(program) => scrollToBook(program)} />
        <WhyLearnWithUs />
        <HowItWorks />
        <Testimonials />
        <Booking />
        <Location />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
