"use client";
// pages/projects/[type]/[id].tsx
import { usePathname } from 'next/navigation';
import { projects } from '../../../data/projectsData';
import ProjectDetails from '../../../ui/projects/projectDetails';

interface Projects {
    [key: string]: {
        id: string;
        title: string;
        description: string;
        images: string[];
        languages: string[];
    }[];
}

export default function Project() {
    const pathname = usePathname();
    const pathParts = pathname.split('/');
    const type = pathParts[2];
    const id = pathParts[3];

    console.log('Type:', type);
    console.log('ID:', id);

    if (!type || !id) {
        return <p>Project not found</p>;
    }

    const project = (projects as Projects)[type]?.find((project) => project.id === id);

    if (!project) {
        return <p>Project not found</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <ProjectDetails
                title={project.title}
                description={project.description}
                images={project.images}
                languages={project.languages}
            />
        </div>
    );
}
