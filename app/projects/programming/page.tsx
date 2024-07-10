import Nav from '../../ui/nav';
import Footer from '../../ui/footer';
import Card from '../../ui/projects/card';

export default function Programming() {
    return (
        <div className="flex flex-col min-h-screen">
            <Nav />
            <main className="flex flex-col justify-center items-center flex-grow gap-32">
                <h1 className='text-5xl font-bold text-black'>Programming Projects</h1>
                <div className='flex flex-row gap-44 justify-center items-center'>
                    <Card title="Swiftsheets" bg="/images/projects/coding.jpg" link="/programming/swiftsheets" />
                    <Card title="Mountain Hikers Weather App" bg="/images/projects/coding.jpg" link="/programming/weatherapp" />
                    <Card title="eFitter customer dashboard" bg="/images/projects/coding.jpg" link="/programming/efitter" />
                </div>
            </main>
            <div className='mt-auto'>
                <Footer />
            </div>
        </div>
    )
}
