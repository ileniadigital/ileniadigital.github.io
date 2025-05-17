interface Module {
    name: string;
    description: string;
    grade: string;
    projectLink?: string;
}

interface CardProps {
    module: Module;
    autofit: boolean;
}

export default function Card({ module, autofit }: CardProps) {
    return (
        <div className={`p-3 rounded-lg grid grid-rows-3 bg-offwhite shadow-lg ${autofit ? 'min-w-[20rem]' : 'min-w-[12rem]'}`}>
            <h5 className="text-lg font-semibold mb-2">{module.name}</h5>
            <p className="text-sm mb-2">{module.description}</p>
            <div className="flex flex-row justify-between items-center">
                <span className="font-bold">Grade: {module.grade}</span>
                {module.projectLink && (
                    <a
                        href={module.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn text-xs ml-2"
                    >
                        View Project
                    </a>
                )}
            </div>
        </div>
    );
}