import Image from 'next/image';

// Props passed to Card component
interface CardProps {
    title: string;
    bg: string;
    link: string;
}
export default function Card({ title, bg, link }: CardProps) {
    const cardStyle = `bg-${bg} bg-cover bg-center filter w-96 h-72 rounded-xl flex items-center justify-center hover:scale-105`;
    const page = `/projects/${link}`;
    return (
        <div>
            <button>
                <a href={page}>
                    <div className={cardStyle}>
                        <h1 className="text-4xl text-offwhite font-bold">{title}</h1>
                    </div>
                </a>
            </button>
        </div>
    );
}