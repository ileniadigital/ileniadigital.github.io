import Image from 'next/image';

interface CardProps {
    language: string;
    image: boolean;
    autofit: boolean;
}

// Card component
export default function Card({ language, image, autofit }: CardProps) {
    return (
        <div className={`p-3 rounded-lg grid grid-row-2 bg-offwhite shadow-lg ${autofit ? 'min-w-[20rem]' : 'min-w-[12rem]'}`}>
            {
                image && (
                    <Image src={`/images/languages/${language}.png`} alt={language} width={100} height={100} className="h-24 ml-auto mr-auto" />
                )
            }
            <h5 className="text-m font-semibold h-4 ml-auto mr-auto">{language}</h5>
        </div >
    );
}