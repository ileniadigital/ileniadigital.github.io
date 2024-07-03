import Image from "next/image";

// Navigation component
export default function Nav() {
    return (
        <nav className="flex flex-row items-center w-full">
            {/* Logo */}
            <Image src="/images/branding/logo.png" alt="Blue and yellow logo of letter I and M" width={50} height={50} />
            {/* Navigational menu */}
            <ul className="flex flex-row gap-10 ml-auto mr-auto text-white text-lg bg-slate-700 p-4 rounded-full mt-3">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
}