import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
    return (
        <div>
            <PageTitle>About</PageTitle>
            <p className={styles.content}>Lorem Ipsum.</p>
        </div>
    );
};

export default About;