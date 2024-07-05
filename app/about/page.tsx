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
            <main className='flex flex-row mt-5'>
                <Aside />
                <div className="ml-5">
                    <h1 className='text-3xl font-bold'>About me</h1>
                    <p className="mt-3 text-lg">
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