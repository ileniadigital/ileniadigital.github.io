// Import UI components
import Nav from './ui/nav';
import Footer from './ui/footer';
import Hero from './ui/home/hero';

const name = [
  {
    text: "Ilenia",
    className: "text-darkgreen",
  },
  {
    text: "Maietta",
    className: "text-darkgreen", // Add this class if needed
  },
];

const jobs = [
  {
    text: "Frontend",
    className: "text-blue-500", // Add this class if needed
  },
  {
    text: "Developer",
    className: "text-darkgreen", // Add this class if needed
  },
];

export default function Home() {
  return (
    <div>
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
