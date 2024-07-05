"use client";

import { useRef } from "react";
import Card from "../cards/card";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

interface CardProps {
    elements: string[];
    title: string;
    image: boolean;
    autofit: boolean;
}
export default function Cards({ elements, title, image, autofit }: CardProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Function to handle scrolling left
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
        }
    };

    // Function to handle scrolling right
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

    return (
        <section className="flex flex-col justify-center items-center gap-10 bg-main h-1/3 ">
            {/* Title */}
            <div className=" w-full flex justify-center">
                <h4 className="text-black text-3xl font-bold mt-16">{title}</h4>
            </div>

            <div className="relative flex flex-row justify-center items-center gap-3 w-full max-w-5xl">
                {/* Left button */}
                <div>
                    <button onClick={scrollLeft} className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 focus:outline-none">
                        <IoIosArrowDropleftCircle size={50} color={"#EBFEFE"} />
                    </button>
                </div>
                {/* Language cards */}
                <div ref={scrollRef}
                    className='w-2/3 flex flex-row gap-5 overflow-x-auto overflow-hidden px-10 mb-5'
                    style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}>

                    {elements.map((element, index) => (
                        <Card key={index} language={element} image={image} autofit={autofit} />
                    ))}
                </div>
                {/* Right button */}
                <div>
                    <button onClick={scrollRight} className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 focus:outline-none">
                        <IoIosArrowDroprightCircle size={50} color={"#EBFEFE"} />
                    </button>
                </div>
            </div>
        </section >
    );
}