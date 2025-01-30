import { INavBarProps } from "./NavBar.props";
import { Link } from 'react-router-dom';
import { Avatar, IconButton } from "@atoms/index";
import './NavBar.css';
import logo from "@assets/images/logo.png"
import { useEffect, useRef } from "react";
import { useAuth } from "@store/useAuth";
import { FaHeart } from "react-icons/fa";

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
                <Link className="navbar-navlink" to="/Adopte-une-plante/">
                    <Avatar imageUrl={logo} altText="Logo" size="large" />
                </Link>
                <nav>
                    <ul className="navbar-navlist">
                        <li>
                            <Link className="navbar-navlink" to="/Adopte-une-plante/plants">Plantes</Link>
                        </li>
                        <li>
                            {/* Pour accéder à mon profil, je vais sur l'utilisateur qui porte mon id, le composant chargé de rendre la page utilisateurs me donnera les droits de modifications*/}
                            <Link className="navbar-navlink" to={`/Adopte-une-plante/users/${userId}`}>Mon profil</Link>
                        </li>
                        <li>
                            <Link className="navbar-navlink" to="/Adopte-une-plante/settings">Paramètres</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="navbar-right">
                <Link to="/Adopte-une-plante/plants/favorites">
                    <IconButton Icon={FaHeart} color="red" size={40} onClick={() => {}}/>
                </Link>
            </div>
        </header>
    )
}