import { INavBarProps } from "./NavBar.props";
import { Link } from 'react-router-dom';
import { Avatar } from "@atoms/index";
import './NavBar.css';
import logo from "@assets/images/logo.png"
import { useEffect, useRef } from "react";
import { useAuth } from "@store/useAuth";
import { FavoriteButton } from "@molecules/FavoriteButton";

export const NavBar: React.FC<INavBarProps> = () => {

    //----- Adapter dynamiquement la padding du body pour prendre en compte la navbar fixed -----//
    const navbarRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const updatePadding = () => {
            if (navbarRef.current) {
                document.body.style.paddingTop = `${navbarRef.current.offsetHeight}px`;
            }
        }
        updatePadding()
    }, [])

    const { userId } = useAuth()

    return (
        <header className="navbar" ref={navbarRef}>

            <div className="navbar-left">
                <Link className="navbar-navlink" to="/">
                    <Avatar imageUrl={logo} altText="Logo" size="large" />
                </Link>
                <nav>
                    <ul className="navbar-navlist">
                        <li>
                            <Link className="navbar-navlink" to="/plants">Plantes</Link>
                        </li>
                        <li>
                            {/* Pour accéder à mon profil, je vais sur l'utilisateur qui porte mon id, le composant chargé de rendre la page utilisateurs me donnera les droits de modifications*/}
                            <Link className="navbar-navlink" to={`/users/${userId}`}>Mon profil</Link>
                        </li>
                        <li>
                            <Link className="navbar-navlink" to="/settings">Paramètres</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="navbar-right">
                <Link to="/plants/favorites">
                    <FavoriteButton size="40px" onClick={() => {}} />
                </Link>
            </div>
        </header>
    )
}