import { INavBarProps } from "./NavBar.props";
import { Link } from 'react-router-dom';
import { Avatar } from "@atoms/Avatar";
import './NavBar.css';
import logo from "@assets/images/logo.png"

export const NavBar: React.FC<INavBarProps> = () => {
    return (
        <header className="navbar">
            <Link className="navbar-navlink" to="/">
                <Avatar imageUrl={logo} altText="Logo" size="large" />
            </Link>
            <nav>
                <ul className="navbar-navlist">
                    <li>
                        <Link className="navbar-navlink" to="/plants">Plantes</Link>
                    </li>
                    <li>
                        <Link className="navbar-navlink" to="/profile">Mon profil</Link>
                    </li>
                    <li>
                        <Link className="navbar-navlink" to="/settings">Paramètres</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}