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
        <div>
            <button>
                <Link href={page}>
                    <div className="bg-main bg-cover bg-center filter w-120 h-96 rounded-xl flex flex-col items-center justify-center hover:scale-105">
                        <Image src={bg} alt={bg} width={450} height={288} className='p-3' />
                        <h1 className="text-xl text-black font-bold truncate">{title}</h1>
                    </div>
                </Link>
            </button>
        </div>
    );
}