// Footer component
export default function Footer() {
    return (
        <footer className="flex flex-row items-center w-full text-xl text-black font bg-main p-2">
            <p>© 2025 Ilenia Maietta</p>
            <nav className="ml-auto">
                {/* Navigational menu */}
                <ul className="flex flex-row gap-10 ml-auto mr-5 text-black text-lg">
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
                        <a href="/contact" className="lnk">Contact</a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}