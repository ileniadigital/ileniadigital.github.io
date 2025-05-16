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
        text: "Byte",
        className: "!text-black text-3xl",
    },
    {
        text: "Queens",
        className: "!text-black text-3xl",
    },
    {
        text: "Content",
        className: "!text-black text-3xl",
    },
    {
        text: "Manager",
        className: "!text-black text-3xl",
    },
];

export default function Hero() {
    return (
        <div >
            <main className="w-full h-full min-h-screen flex flex-col">
                <div className='flex flex-row flex-1'>
                    {/* Left column */}
                    <div className="flex flex-col gap-5 mt-20 md:mt-40 ml-5 md:ml-20 max-w-xl flex-shrink-0">
                        <h2 className="text-5xl md:text-7xl font-semibold">Hi, I am Ilenia!</h2>
                        <h3 className="text-xl md:text-3xl justify-normal ">
                            I am a Software Engineering Intern at Millennium, studying Computer Science at university. I focus on developing smooth and intuitive user experiences, to render technology suitable for all.
                        </h3>
                        <button className="w-full md:w-56 md:ml-32 text-xl btn">
                            <a href="/projects">See my projects</a>
                        </button>
                    </div>

                    {/* Right column - Portrait */}
                    <div className="relative flex-1 h-0 md:h-[700px] md:mt-0 hidden md:block">
                        <Image
                            src='/images/portrait_no_bckg.png'
                            alt="yellow, green and pink portrait of Ilenia"
                            fill
                            style={{ objectFit: 'contain' }}
                            sizes="(min-width: 768px) 50vw, 100vw"
                            priority
                        />
                    </div>
                </div>
            </main >
        </div >
    );
}
