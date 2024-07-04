import Image from "next/image";
import Card from "./cards/card";

const languages = [
    "HTML",
    "CSS",
    "JavaScript",
    "php",
    "TypeScript",
    "Python",
    "Java",
    "Next",
    "React",
    "Tailwind",
]

export default function Languages() {
    return (
        <section>
            <h4 className="text-darkgreen text-3xl font-bold">Programming Languages</h4>
            <div className='flex flex-row gap-16 justify-center'>
                {languages.map((language, index) => (
                    <Card key={index} language={language} />
                ))}
            </div>
        </section >
    );
}