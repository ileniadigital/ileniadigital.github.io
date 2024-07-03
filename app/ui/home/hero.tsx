import Image from 'next/image';
import { TypewriterEffect } from './type-writer-effect';

const name = [
    {
        text: "Ilenia",
        className: "text-darkgreen",
    },
    {
        text: "Maietta",
        className: "text-darkgreen",
    },
];

const jobs = [
    {
        text: "Frontend",
        className: "text-blue-500",
    },
    {
        text: "Developer",
        className: "text-darkgreen",
    },
];

export default function Hero() {
    return (
        <div>
            <main>
                {/* Hero section */}
                <div className='flex flex-row bg-yellow'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-5xl'>Hi I am Ilenia!</h1>
                        <h2 className='text-2xl'>Amazon Future Engineer. Front-end Developer. Freelancer</h2>
                        {/* Programming languages icons */}
                        <div>

                        </div>
                        <button className='w-48 rounded-full bg-darkgreen p-3 text-white hover:text-yellow'><a href="/projects">See my projects</a></button>
                    </div>

                    {/* Portrait */}
                    <figure>
                        <Image src='/images/portrait.png' alt="yellow, green and pink portrait of Ilenia" width={300} height={900}></Image>
                    </figure>

                </div >

            </main >
        </div >
    );
}
