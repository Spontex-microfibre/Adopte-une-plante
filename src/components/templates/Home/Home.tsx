import { Link } from "react-router-dom";
import "./Home.css"

export const Home: React.FC = () => {

    return (
        <main className="home-layout">
            <h1>Bienvenue sur "Adopte une Plante" !</h1>
            <p>
                Vous en avez assez des plantes qui ne reçoivent pas assez d'amour ?
                "Adopte une Plante" est une application qui vous permet d'adopter des
                plantes en quête d'un foyer aimant. Trouvez la plante qui vous correspond
                et offrez-lui un nouvel espace pour grandir.
            </p>

            <section>
                <h2>Notre mission</h2>
                <p>
                    L'objectif de notre application est de rendre les plantes accessibles
                    à tous ceux qui souhaitent ajouter une touche de verdure à leur vie.
                    Que vous soyez un expert en jardinage ou un simple amateur, nous avons
                    la plante parfaite pour vous !
                </p>

                <div>
                    <Link to="/Adopte-une-plante/plants">
                        Voir toutes les plantes disponibles
                    </Link>
                </div>
            </section>

        </main>
    )
}