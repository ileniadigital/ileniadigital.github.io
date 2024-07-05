// Footer component
export default function Footer() {
    return (
        <footer className="flex flex-row items-center w-full text-xl text-white font bg-main p-2">
            <p>© 2024 Ilenia Maietta</p>
            <nav className="ml-auto">
                {/* Navigational menu */}
                <ul className="flex flex-row gap-10 ml-auto mr-5 text-white text-lg">
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
                        <a href="/contact" className="hover:text-xl hover:font-bold">Contact</a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}