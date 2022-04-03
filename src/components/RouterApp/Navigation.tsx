import { NavLink } from 'react-router-dom';
import ReactLogo from './Navigation/ReactLogo';

const Navigation = () => {
    return (
        <nav>
            <ReactLogo />

            <ul>
                <li>
                    <NavLink
                        to="register"
                        className={({ isActive }) => (isActive) ? 'nav-active' : ''}
                    >
                        Register
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="home"
                        className={({ isActive }) => (isActive) ? 'nav-active' : ''}
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="users"
                        className={({ isActive }) => (isActive) ? 'nav-active' : ''}
                    >
                        Users
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="about"
                        className={({ isActive }) => (isActive) ? 'nav-active' : ''}
                    >
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
