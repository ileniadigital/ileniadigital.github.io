import Nav from '../../../ui/nav';
import Footer from '../../../ui/footer';

export default function FightForPeace() {
    return (
        <div className="flex flex-col min-h-screen">
            <Nav />
            <main className="flex flex-col justify-center items-center flex-grow gap-32">
                <h1 className='text-5xl font-bold text-black'>Fight For Peace</h1>
            </main>
            <div className='mt-auto'>
                <Footer />
            </div>
        </div>
    )
}
