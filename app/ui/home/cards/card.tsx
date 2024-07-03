import Image from 'next/image';

interface CardProps {
    logo: string;
    name: string;
}

// Card component
export default function Card({ logo, name }: CardProps) {
    return (
        <div className='w-24 p-1 rounded-lg border-4 border-darkgreen'>
            <Image src={`/images/languages/${logo}.png`} alt={name} width={100} height={100} />
            <h5>{name}</h5>
        </div>
    );
}