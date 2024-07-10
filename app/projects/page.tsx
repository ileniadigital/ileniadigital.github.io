//Background images sources
//Coding image: Photo by Danny Meneses from Pexels: https://www.pexels.com/photo/photo-of-turned-on-laptop-computer-943096/
//Content creation image: Photo by Caio  : https://www.pexels.com/photo/turned-on-screen-silver-macbook-air-on-wooden-desk-56759/

// Import UI components
import Nav from '../ui/nav';
import Footer from '../ui/footer';
import Card from '../ui/projects/card';

export default function Projects() {
    return (
        <body>
            <Nav />
            <main>
                <div>
                    <h1>My Projects</h1>
                    <Card title="Programming" image="project1.png" />
                </div>
            </main>
            <Footer />
        </body>
    )
}