import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Container>
                <div className={styles.navHeader}>
                    <a href="/" className={styles.link}>
                        <span className="fa fa-tasks" />
                    </a>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Favourite</a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;