import Nav from '../../ui/nav';
import Footer from '../../ui/footer';
import Card from '../../ui/projects/card';

export default function Content() {
    return (
        <div className="flex flex-col min-h-screen">
            <Nav />
            <main className="flex flex-col justify-center items-center flex-grow gap-32">
                <h1 className='text-5xl font-bold text-black'>Content Creation</h1>
                <div className='flex flex-row gap-44 justify-center items-center'>
                    <Card title="Social Media" bg="coding" link="/socialmedia" />
                    <Card title="Fight For Peace" bg="content" link="/fightforpeace" />
                    <Card title="Byte Queens" bg="content" link="/bytequeens" />
                </div>
            </main>
            <div className='mt-auto'>
                <Footer />
            </div>
        </div>
    )
}
