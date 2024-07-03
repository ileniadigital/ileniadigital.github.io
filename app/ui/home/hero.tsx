import Image from 'next/image';
import { TypewriterEffect } from './type-writer-effect';

const name = [
    {
        text: "Amazon",
        className: "!text-black text-3xl",
    },
    {
        text: "Future",
        className: "!text-black text-3xl",
    },
    {
        text: "Engineer.",
        className: "!text-black text-3xl",
    },
    {
        text: "Software",
        className: "!text-black text-3xl",
    },
    {
        text: "Engineer.",
        className: "!text-black text-3xl",
    },
    {
        text: "Content",
        className: "!text-black text-3xl",
    },
    {
        text: "Creator.",
        className: "!text-black text-3xl",
    },
];

export default function Hero() {
    return (
        <div >
            <main>
                {/* Hero section */}
                <div className='flex flex-row'>
                    <div className='flex flex-col gap-5 mt-40 ml-20'>
                        <h2 className="text-7xl font-semibold">Hi, I am Ilenia!</h2>
                        <h3><TypewriterEffect words={name} /></h3>
                        {/* Programming languages icons */}
                        <div>

                        </div>
                        <button className='w-52 rounded-full ml-32 text-lg bg-darkgreen p-3 text-white hover:text-yellow hover:font-bold hover:text-xl'><a href="/projects">See my projects</a></button>
                    </div>

                    {/* Portrait */}
                    <figure className='mr-auto ml-32 '>
                        <Image src='/images/portrait_no_bckg.png' alt="yellow, green and pink portrait of Ilenia" width={400} height={1200}></Image>
                    </figure>

                </div >

            </main >
        </div >
    );
}
