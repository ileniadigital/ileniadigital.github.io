import Image from 'next/image';
import Link from 'next/link';

// Props passed to Card component
interface CardProps {
    title: string;
    bg: string;
    link: string;
}

export default function Card({ title, bg, link }: CardProps) {
    const page = `/projects/${link}`;
    return (
        <Link href={page} className="block w-96 h-96">
            <button className="w-full h-full bg-main rounded-xl hover:scale-105 flex flex-col justify-center items-center gap-5">
                <div className="relative w-4/5 h-3/4 mx-auto">
                    <Image
                        src={bg}
                        alt={bg}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <h1 className="text-xl text-black font-bold truncate text-center pb-3">{title}</h1>
            </button>
        </Link>
    );
}
