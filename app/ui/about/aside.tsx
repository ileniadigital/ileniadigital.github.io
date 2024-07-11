import Link from "next/link";

export default function Aside() {
    return (
        <aside className="w-1/4 bg-main h-auto">
            <ul className="flex flex-col gap-4 text-white text-xl fixed ml-3 mt-7">
                <li className="hover:text-2xl hover:font-bold">
                    <Link href="#about">About me</Link>
                </li>
                <li className="hover:text-2xl hover:font-bold">
                    <Link href="#education">Education</Link>
                </li>
                <li className="hover:text-2xl hover:font-bold">
                    <Link href="#experience">Experience</Link>
                </li>
                {/* <li className="hover:text-2xl hover:font-bold">
                    <Link href="/skills">Skills</Link>
                </li> */}
            </ul>
        </aside>
    );
}