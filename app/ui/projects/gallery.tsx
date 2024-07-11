import { useRef } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

interface ImageGalleryProps {
    images: string[]; // Array of image paths
}

export default function ImageGallery({ images }: ImageGalleryProps) {
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
        <div className="relative flex flex-row justify-center items-center gap-3 w-full max-w-5xl">
            {/* Left button */}
            <div>
                <button onClick={scrollLeft} className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 focus:outline-none">
                    <IoIosArrowDropleftCircle size={50} color={"#0AEBEB"} />
                </button>
            </div>
            {/* Image gallery */}
            <div ref={scrollRef}
                className='w-2/3 flex flex-row gap-5 overflow-x-auto overflow-hidden px-10 mb-5'
                style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}>

                {images.map((image, index) => (
                    <div key={index} className="relative flex-shrink-0 h-96">
                        <img src={image} alt={`Project image ${index + 1}`} className="object-cover w-full h-full rounded-lg" />
                    </div>
                ))}
            </div>
            {/* Right button */}
            <div>
                <button onClick={scrollRight} className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 focus:outline-none">
                    <IoIosArrowDroprightCircle size={50} color={"#0AEBEB"} />
                </button>
            </div>
        </div>
    );
}
