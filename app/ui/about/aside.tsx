export default function Aside() {
    return (
        <aside className="w-1/4 bg-main h-screen h-64">
            <ul className="flex flex-col gap-4 text-white text-xl fixed ml-3">
                <li className="hover:text-2xl hover:font-bold">
                    <a >About me</a>
                </li>
                <li className="hover:text-2xl hover:font-bold">
                    <a>Education</a>
                </li>
                <li className="hover:text-2xl hover:font-bold">
                    <a>Experience</a>
                </li>
                <li className="hover:text-2xl hover:font-bold">
                    <a>Skills</a>
                </li>
            </ul>
        </aside>
    );
}