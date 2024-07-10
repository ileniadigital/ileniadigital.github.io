import Nav from '../ui/nav';
import Footer from '../ui/footer';
import Message from '../ui/contact/message';

export default function Contact() {
    return (
        <div>
            <Nav />
            <main>
                {/* Cards */}
                <div className='flex flex-row gap-40 items-center justify-center mt-20'>
                    <Message message='Want to work together?' email={true} />
                    <Message message='Want to see my work?' email={false} />
                </div>
                <Footer />
            </main>
        </div>
    );
};


