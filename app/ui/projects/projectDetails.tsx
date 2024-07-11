// components/ProjectDetails.tsx
import Image from 'next/image';

//Import UI components
import Nav from '../nav';
import Footer from '../footer';
import ImageGallery from './gallery';

interface ProjectDetailsProps {
    title: string;
    description: string;
    images: string[];
    languages: string[];
}

export default function ProjectDetails({ title, description, images, languages }: ProjectDetailsProps) {
    return (
        <div>
            <Nav />
            <div className="flex flex-col md:flex-row gap-8 p-4">
                <div className="flex flex-col md:w-1/2">
                    <ImageGallery images={images} />
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
            <Footer />
        </div>
    );
}
