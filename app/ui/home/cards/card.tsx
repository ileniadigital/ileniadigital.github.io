import Image from 'next/image';

interface CardProps {
    language: string;
}

// Card component
export default function Card({ language }: CardProps) {
    return (
        <div className='w-24 p-1 rounded-lg border-4 border-darkgreen flex flex-col gap-3 justify-center items-center'>
            <Image src={`/images/languages/${language}.png`} alt={language} width={100} height={100} />
            <h5>{language}</h5>
        </div>
    );
}