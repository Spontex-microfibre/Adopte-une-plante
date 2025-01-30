import { INavBarProps } from "./NavBar.props";
import { Link } from 'react-router-dom';
import { Avatar } from "@atoms/index";
import './NavBar.css';
import logo from "@assets/images/logo.png"
import { useEffect, useRef } from "react";
import { useAuth } from "@store/useAuth";

export const NavBar: React.FC<INavBarProps> = () => {

    const navbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updatePadding = () => {
            if (navbarRef.current) {
                document.body.style.paddingTop = `${navbarRef.current.offsetHeight}px`;
            }
        };

        updatePadding();

    }, []);

    const {userId} = useAuth()

    return (
        <header className="navbar" ref={navbarRef}>
            <Link className="navbar-navlink" to="/">
                <Avatar imageUrl={logo} altText="Logo" size="large" />
            </Link>
            <nav>
                <ul className="navbar-navlist">
                    <li>
                        <Link className="navbar-navlink" to="/plants">Plantes</Link>
                    </li>
                    <li>
                        <Link className="navbar-navlink" to={`/users/${userId}`}>Mon profil</Link>
                    </li>
                    <li>
                        <Link className="navbar-navlink" to="/settings">Paramètres</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}