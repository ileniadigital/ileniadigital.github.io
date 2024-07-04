import Image from 'next/image';

interface CardProps {
    language: string;
}

// Card component
export default function Card({ language }: CardProps) {
    return (
        <div className='w-28 p-1 rounded-lg border-4 border-darkgreen grid grid-row-2'>
            <Image src={`/images/languages/${language}.png`} alt={language} width={100} height={100} className="h-24 ml-auto mr-auto" />
            <h5 className="text-m font-semibold h-4 ml-auto mr-auto">{language}</h5>
        </div>
    );
}