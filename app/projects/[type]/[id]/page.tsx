"use client";
// pages/projects/[type]/[id].tsx
import { usePathname } from 'next/navigation';

// Import data
import { projects } from '../../../data/projectsData';

// Import UI components
import ProjectDetails from '../../../ui/projects/projectDetails';
import Footer from '@/app/ui/footer';
import Nav from '@/app/ui/nav';

interface Projects {
    [key: string]: {
        id: string;
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
    }[];
}

export default function Project() {
    const pathname = usePathname();
    const pathParts = pathname.split('/');
    const type = pathParts[2];
    const id = pathParts[3];

    if (!type || !id) {
        return <p>Project not found</p>;
    }
    // Retrieve project data
    const project = (projects as Projects)[type]?.find((project) => project.id === id);

    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <div className="flex flex-col min-h-screen gap-32">
            <Nav />
            <div className="flex-grow mr-auto ml-auto flex justify-center">
                <ProjectDetails
                    title={project.title}
                    description={project.description}
                    images={project.images}
                    languages={project.languages}
                    links={project.links}
                />
            </div>
            <Footer />
        </div>
    );
}
