import Image from "next/image";
import { FaGithub } from "react-icons/fa";

// Navigation component
export default function Nav() {
    return (
        <nav className="flex flex-row items-center w-full">
            {/* Logo */}
            <div className="flex flex-row items-center">
                <a href="/"><Image src="/images/branding/logo.png" alt="Blue and yellow logo of letter I and M" width={75} height={75} /></a>
            </div>

            {/* Navigational menu */}
            <ul className="flex flex-row gap-10 ml-auto mr-auto mt-5 text-black text-xl bg-main rounded-full p-4 px-6">
                <li>
                    <a href="/" className="lnk">Home</a>
                </li>
                <li>
                    <a href="/about" className="lnk">About</a>
                </li>
                <li>
                    <a href="/projects" className="lnk">Projects</a>
                </li>
                <li>
                    <button><a href="/contact" className="btn">Contact</a></button>
                </li>
            </ul>

            {/* GitHub Link */}
            <div className="flex flex-row items-center mr-3">
                <a href="https://github.com/ileniadigital"><FaGithub size={50} color="#b1d699" className="hover:scale-125" /></a>
            </div>
        </nav>
    );
}