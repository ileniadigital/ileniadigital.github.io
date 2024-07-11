// components/ProjectDetails.tsx
import Image from 'next/image';

interface ProjectDetailsProps {
    title: string;
    description: string;
    images: string[];
    languages: string[];
}

export default function ProjectDetails({ title, description, images, languages }: ProjectDetailsProps) {
    return (
        <div className="flex flex-col md:flex-row gap-8 p-4">
            <div className="flex flex-col md:w-1/2">
                {images.map((img, index) => (
                    <Image key={index} src={img} alt={`${title} image ${index + 1}`} width={500} height={300} className="mb-4" />
                ))}
            </div>
            <div className="flex flex-col md:w-1/2">
                <h1 className="text-2xl font-bold mb-4">{title}</h1>
                <p className="mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {languages.map((lang, index) => (
                        <span key={index} className="bg-gray-200 px-2 py-1 rounded-md">{lang}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
