import Image from "next/image";

// Navigation component
export default function Nav() {
    return (
        <nav className="flex flex-row items-center w-full">
            {/* Logo */}
            <div className="flex flex-row items-center">
                <a href="/"><Image src="/images/branding/logo.png" alt="Blue and yellow logo of letter I and M" width={75} height={75} /></a>
                <h1 className="text-2xl text-main font-bold">Ilenia Maietta</h1>
            </div>

            {/* Navigational menu */}
            <ul className="flex flex-row gap-10 ml-auto mr-5 text-main text-xl">
                <li>
                    <a href="/" className="hover:text-2xl hover:font-bold">Home</a>
                </li>
                <li>
                    <a href="/about" className="hover:text-2xl hover:font-bold">About</a>
                </li>
                <li>
                    <a href="/projects" className="hover:text-2xl hover:font-bold">Projects</a>
                </li>
                <li>
                    <button><a href="/contact" className="bg-main text-black hover:text-black hover:bg-main rounded-full p-3 hover:text-2xl hover:font-bold">Contact</a></button>
                </li>
            </ul>
        </nav>
    );
}