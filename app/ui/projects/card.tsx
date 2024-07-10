import Image from 'next/image';

// Props passed to Card component
interface CardProps {
    title: string;
    bg: string
}
export default function Card({ title, bg }: CardProps) {
    const cardStyle = `bg-${bg} bg-cover bg-center filter w-96 h-72 rounded-xl flex items-center justify-center hover:scale-105 transform transition duration-500 ease-in-out`;
    return (
        <div>
            <button>
                <a href="/projects">
                    <div className={cardStyle}>
                        <h1 className="text-4xl text-offwhite font-bold">{title}</h1>
                    </div>
                </a>
            </button>
        </div>
    );
}