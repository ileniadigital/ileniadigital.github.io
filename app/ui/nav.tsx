import Image from "next/image";

// Navigation component
export default function Nav() {
    return (
        <nav className="flex flex-row items-center w-full">
            {/* Logo */}
            <Image src="/images/branding/logo.png" alt="Blue and yellow logo of letter I and M" width={50} height={50} />
            {/* Navigational menu */}
            <ul className="flex flex-row gap-10 ml-auto mr-auto text-white text-lg bg-darkgreen p-5 rounded-full mt-3">
                <li>
                    <a href="/" className="hover:text-yellow hover:font-bold">Home</a>
                </li>
                <li>
                    <a href="/about" className="hover:text-yellow hover:font-bold">About</a>
                </li>
                <li>
                    <a href="/projects" className="hover:text-yellow hover:font-bold">Projects</a>
                </li>
                <li>
                    <a href="/contact" className="hover:text-yellow hover:font-bold">Contact</a>
                </li>
            </ul>
        </nav>
    );
}