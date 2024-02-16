import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Container>
                <div className={styles.navHeader}>
                    <Link to="/" className={styles.link}>
                        <span className="fa fa-tasks" /></Link>
                    <ul>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.linkNoActive}
                        to="/">Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.linkNoActive}
                        to="/favorite">Favorite</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : styles.linkNoActive}
                        to="/about">About</NavLink></li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;