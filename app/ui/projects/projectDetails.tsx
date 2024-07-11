import Link from 'next/link';

//Import icons
import { FaGithub, FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";
//Import UI components
import ImageGallery from './gallery';


interface ProjectDetailsProps {
    title: string;
    description: string;
    images: string[];
    languages: string[];
    links: {
        instagram?: string;
        linkedin?: string;
        github?: string;
        website?: string;
    }[];
}

export default function ProjectDetails({ title, description, images, languages, links }: ProjectDetailsProps) {
    return (
        <div className="flex flex-row gap-10 w-10/12 justify-center items-center">
            <div>
                <ImageGallery images={images} />
            </div>
            <div className="flex flex-col w-1/2 gap-4 justify-center items-center">
                <h1 className="text-3xl font-bold">{title}</h1>
                <p className="mb-4 text-xl text-justify">{description}</p>
                {/* Languages */}
                <div className="flex flex-wrap gap-6">
                    {languages.map((lang, index) => (
                        <span key={index} className="bg-main px-2 py-1 rounded-md text-lg">{lang}</span>
                    ))}
                </div>
                {/* Social media links */}
                <div className="flex flex-wrap gap-4 mt-4">
                    {links.map((link, index) => (
                        <div key={index} className="flex gap-4">
                            {link.instagram && (
                                <Link href={link.instagram} target="_blank" rel="noopener noreferrer">
                                    <button className="bg-[#0AEBEB] px-4 py-2 rounded-md text-white">
                                        <FaInstagram />
                                    </button>
                                </Link>
                            )}
                            {link.linkedin && (
                                <Link href={link.linkedin} target="_blank" rel="noopener noreferrer">
                                    <button className="bg-[#0AEBEB] px-4 py-2 rounded-md text-white">
                                        <FaLinkedin />
                                    </button>
                                </Link>
                            )}
                            {link.github && (
                                <Link href={link.github} target="_blank" rel="noopener noreferrer">
                                    <button className="bg-[#0AEBEB] px-4 py-2 rounded-md text-white">
                                        <FaGithub />
                                    </button>
                                </Link>
                            )}
                            {link.website && (
                                <Link href={link.website} target="_blank" rel="noopener noreferrer">
                                    <button className="bg-[#0AEBEB] px-4 py-2 rounded-md text-white">
                                        <FaGlobe />
                                    </button>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}