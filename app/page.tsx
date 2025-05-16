// Import UI components
import Nav from './ui/nav';
import Footer from './ui/footer';
import Hero from './ui/home/hero';
import Languages from './ui/home/languages';

export default function Home() {
  return (
    <div className='bg-offwhite'>
      {/* Navigation menu */}
      <Nav />
      <main>
        {/* Hero section */}
        <Hero />
      </main >
      {/* Footer */}
      <Footer />
    </div >
  );
}
