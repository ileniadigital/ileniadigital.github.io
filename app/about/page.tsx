import Image from 'next/image';
// Import UI components
import Nav from '../ui/nav';
import Footer from '../ui/footer';
import Aside from '../ui/about/aside';
import Education from '../ui/about/education';
import Experience from '../ui/about/experience';

export default function About() {
    return (
        <div>
            <Nav />
            <main className='flex flex-row mt-5'>
                <Aside />
                <div>
                    <div className="ml-5 flex flex-row">
                        <div className='mt-10'>
                            <h1 className='text-3xl font-bold' id="about">About me</h1>
                            <p className="mt-3 text-xl">
                                I am originally from a small town in South Italy, and moved to the UK in 2018. I am a Computer Science Student at Queen Mary University of London, with a passion for development and design.
                                Other than a tech lover, I am an amateaur boxer, a bookworm and a passionate crocheter.
                            </p>
                        </div>
                        <Image src={'/images/ilenia.jpg'} alt={"Picture of Ilenia in front of a waterfall"} width={400} height={1200} className="mr-44 rounded-3xl" />
                        {/* ADD WIDGETS OF HOBBIES??? */}
                    </div>
                    <div id="education">
                        <Education />
                    </div>
                    <div id="experience">
                        <Experience />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}