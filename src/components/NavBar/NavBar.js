import Container from '../Container/Container';
import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Container>
                <div className={styles.navHeader}>
                    <a href="/" className={styles.link}>
                    
                    </a>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;