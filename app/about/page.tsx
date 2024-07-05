import Image from 'next/image';

// Import UI components
import Nav from '../ui/nav';
import Footer from '../ui/footer';
import Aside from '../ui/about/aside';
import Education from '../ui/about/education';

export default function About() {
    return (
        <body>
            <Nav />
            <main className='flex flex-row'>
                <Aside />
                <div>
                    <h1>About me</h1>
                    <p>
                        I am originally from a small town in South Italy, and moved to the UK in 2018. I am a Computer Science Student at Queen Mary University of London, with a passion for development and design.
                        Other than a tech lover, I am an amateaur boxer, a bookworm and a passionate crocheter.
                    </p>
                    <Education />
                </div>
            </main>
            <Footer />
        </body>
    )
}