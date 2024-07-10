import Image from 'next/image';

// Props passed to Card component
interface CardProps {
    title: string;
    image: string;

}
export default function Card({ title, image }: CardProps) {
    return (
        <div className="bg-coding w-52 rounded-xl h-52 flex items-center justify-center">
            <h1 className="text-3xl">{title}</h1>
        </div>
    );
}