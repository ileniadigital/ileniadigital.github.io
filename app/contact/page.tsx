// Import UI components
import Nav from '../ui/nav';
import Footer from '../ui/footer';
import Message from '../ui/contact/message';

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            <Nav />
            <main className="flex-grow">
                {/* Cards */}
                <div className='flex flex-row gap-40 items-center justify-center mt-48 bg-main p-20'>
                    <Message message='Want to work together?' email={true} />
                    <Message message='Want to see my work?' email={false} />
                </div>
            </main>
            <div className='mt-auto'>
                <Footer />
            </div>
        </div>
    );
};


