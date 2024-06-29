import Image from 'next/image';

// Import UI components
import Nav from './ui/nav';
import Footer from './ui/footer';

export default function Home() {
  return (
    <body>
      <Nav />
      <main>
        <div>
          <h1>My portfolio</h1>
        </div>
      </main>
      <Footer />
    </body >



  )
}