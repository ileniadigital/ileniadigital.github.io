import Image from "next/image";

// Navigation component
export default function Nav() {
    return (
        <nav className="flex flex-row items-center w-full">
            {/* Logo */}
            <div className="flex flex-row items-center">
                <a href="/"><Image src="/images/branding/logo.png" alt="Blue and yellow logo of letter I and M" width={75} height={75} /></a>
                <h1 className="text-2xl text-darkgreen font-bold">Ilenia Maietta</h1>
            </div>

            {/* Navigational menu */}
            <ul className="flex flex-row gap-10 ml-auto mr-5 text-darkgreen text-lg">
                <li>
                    <a href="/" className="hover:text-xl hover:font-bold">Home</a>
                </li>
                <li>
                    <a href="/about" className="hover:text-xl hover:font-bold">About</a>
                </li>
                <li>
                    <a href="/projects" className="hover:text-xl hover:font-bold">Projects</a>
                </li>
                <li>
                    <button><a href="/contact" className="bg-darkgreen text-yellow rounded-full p-3 hover:text-xl hover:font-bold">Contact</a></button>
                </li>
            </ul>
        </nav>
    );
}