import Cards from "../cards/cards";

// List of languages
const languages: string[] = [
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
];

export default function Languages() {
    return (
        <Cards elements={languages} title="Programming Languages" image autofit={false} />
    );
}