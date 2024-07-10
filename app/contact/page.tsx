import Image from 'next/image';

// Import UI components
import Nav from '../ui/nav';
import Footer from '../ui/footer';
import Message from '../ui/contact/message';

export default function Contact() {
    return (
        <body>
            <main>
                <Nav />
                {/* Cards */}
                <div className='flex flex-row gap-40 items-center justify-center mt-20'>
                    <Message message='Want to work together?' email={true} />
                    <Message message='Want to see my work?' email={false} />
                </div>
                <Footer />
            </main>
        </body>
    )
}