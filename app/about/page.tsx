import Image from 'next/image';

// Import UI components
import Nav from '../ui/nav';
import Footer from '../ui/footer';

export default function About() {
    return (
        <body>
            <Nav />
            <main>
                <div>
                    <h1>About me</h1>
                    <p>
                        I'm a software developer from London. I've been coding for over 10 years and I love it.
                    </p>
                </div>
            </main>
            <Footer />
        </body>
    )
}