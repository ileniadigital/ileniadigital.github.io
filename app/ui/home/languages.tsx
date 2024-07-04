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
        <section className="flex flex-col justify-center items-center gap-10">
            <div className="bg-darkgreen w-full flex justify-center">
                <h4 className="text-yellow text-3xl font-bold">Programming Languages</h4>
            </div>

            <div className='flex flex-row gap-16 justify-center'>
                {languages.map((language, index) => (
                    <Card key={index} language={language} />
                ))}
            </div>
        </section >
    );
}