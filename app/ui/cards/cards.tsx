"use client";

import Card from "../cards/card";

interface Module {
    name: string;
    grade: string;
    projectLink?: string;
}

interface CardsProps {
    elements: Module[];
    title: string;
    autofit: boolean;
}

export default function Cards({ elements, title, autofit }: CardsProps) {
    return (
        <section className="flex flex-col justify-center items-center gap-10 bg-main pb-16">
            {/* Title */}
            <div className="w-full flex justify-center">
                <h4 className="text-black text-3xl font-bold mt-16">{title}</h4>
            </div>

            {/* Gallery grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl px-10">
                {elements.map((module, index) => (
                    <Card key={index} module={module} autofit={autofit} />
                ))}
            </div>
        </section>
    );
}