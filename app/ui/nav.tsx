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
        </nav>
    );
}