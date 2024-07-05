import Image from 'next/image';

interface CardProps {
    language: string;
}

// Card component
export default function Card({ language }: CardProps) {
    return (
        <div className='min-w-[12rem] p-3 rounded-lg grid grid-row-2 bg-offwhite shadow-lg'>
            <Image src={`/images/languages/${language}.png`} alt={language} width={100} height={100} className="h-24 ml-auto mr-auto" />
            <h5 className="text-m font-semibold h-4 ml-auto mr-auto">{language}</h5>
        </div>
    );
}