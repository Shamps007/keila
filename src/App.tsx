import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import Procedures from './components/Procedures';
import BeforeAfter from './components/BeforeAfter';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans text-stone-800 selection:bg-wine selection:text-white scroll-smooth bg-white">
      <Navbar />
      <main>
        <Hero />
        <Info />
        <Procedures />
        <BeforeAfter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
