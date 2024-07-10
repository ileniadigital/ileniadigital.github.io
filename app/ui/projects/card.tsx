import Image from 'next/image';

// Props passed to Card component
interface CardProps {
    title: string;
    bg: string
}
export default function Card({ title, bg }: CardProps) {
    const cardStyle = `bg-${bg} bg-cover bg-center filter w-96 h-72 rounded-xl flex items-center justify-center`;
    return (
        <div className={cardStyle}>
            <h1 className="text-4xl text-offwhite font-bold">{title}</h1>
        </div>
    );
}