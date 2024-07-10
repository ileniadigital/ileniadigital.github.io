import Image from 'next/image';

// Props passed to Card component
interface CardProps {
    title: string;
    bg: string
}
export default function Card({ title, bg }: CardProps) {
    const cardStyle = `bg-${bg} bg-cover bg-center filter w-72 rounded-xl h-56 flex items-center justify-center`;
    return (
        <div className={cardStyle}>
            <h1 className="text-3xl text-offwhite">{title}</h1>
        </div>
    );
}