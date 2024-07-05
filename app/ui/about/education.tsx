import Cards from "../cards/cards";

const modules = [
    "Procedural Programming",
    "Object Oriented Programming",
    "Web Technologies",
    "Professional Research and Practice",
    "Logic and Discrete Structures",
    "Computer Systems and Networks",
    "Automata and Formal Languages",
    "Information System Analysis",
    "Probability and Matrices",
    "Database Systems",
    "Software Engineering",
    "Algorithms and Data Structures",
    "Operating Systems",
    "Graphical User Interfaces",
    "Internet Protocols"
]

// Education component with details of education
export default function Education() {
    return (
        <section className="mt-5">
            <div className="ml-5">
                <h1 className='text-3xl font-bold'>Education</h1>
                <h2 className='text-2xl font-bold mt-3'>MSci Computer Science</h2>
                <h2 className='text-2xl font-bold mt-2'>Queen Mary University of London (2022-2026)</h2>
                <p>Information about university</p>
            </div>
            <Cards elements={modules} title="Modules studied" image={false} autofit />
        </section>
    );
}