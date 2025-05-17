interface Module {
    name: string;
    languages?: string;
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
            <div className="flex flex-col justify-between items-center">
                {module.languages && (
                    <span className="">Languages: {module.languages}</span>
                )}
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