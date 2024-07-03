import Image from 'next/image';

// Import UI components
import Nav from '../ui/nav';
import Footer from '../ui/footer';

export default function Contact() {
    return (
        <body>
            <main>
                <Nav />
                <div>
                    <h1>Contact me</h1>
                </div>
                <Footer />
            </main>
        </body>
    )
}