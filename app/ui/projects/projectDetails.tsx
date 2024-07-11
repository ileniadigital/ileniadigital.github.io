//Import UI components
import ImageGallery from './gallery';

interface ProjectDetailsProps {
    title: string;
    description: string;
    images: string[];
    languages: string[];
}

export default function ProjectDetails({ title, description, images, languages }: ProjectDetailsProps) {
    return (
        <div className="flex flex-row gap-10 w-10/12 justify-center items-center">
            <div>
                <ImageGallery images={images} />
            </div>
            <div className="flex flex-col w-1/2 gap-4 justify-center items-center">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="mb-4 text-xl text-justify">{description}</p>
                <div className="flex flex-wrap gap-6">
                    {languages.map((lang, index) => (
                        <span key={index} className="bg-main px-2 py-1 rounded-md text-lg">{lang}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
