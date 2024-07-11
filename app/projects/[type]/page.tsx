"use client";
// pages/projects/[type]/page.tsx
import { usePathname } from 'next/navigation';
import Nav from '../../ui/nav';
import Footer from '../../ui/footer';
import Card from '../../ui/projects/card';
import { projects } from '../../data/projectsData';

interface ProjectType {
    id: string;
    title: string;
    description: string;
    images: string[];
    languages: string[];
}

interface ProjectsData {
    [key: string]: ProjectType[];
}

export default function ProjectType() {
    const pathname = usePathname();
    const pathParts = pathname.split('/');
    const type = pathParts[2];

    if (!type || typeof type !== 'string') {
        return <p>Project type not found</p>;
    }

    const projectList = (projects as ProjectsData)[type];

    if (!projectList) {
        return <p>Project type not found</p>;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Nav />
            <main className="flex flex-col justify-center items-center flex-grow gap-32">
                <h1 className='text-5xl font-bold text-black'>{type.charAt(0).toUpperCase() + type.slice(1)} Projects</h1>
                <div className='flex flex-row gap-44 justify-center items-center'>
                    {projectList.map((project) => (
                        <Card
                            key={project.id}
                            title={project.title}
                            bg={project.images[0]}
                            link={`/${type}/${project.id}`}
                        />
                    ))}
                </div>
            </main>
            <div className='mt-auto'>
                <Footer />
            </div>
        </div>
    );
}
