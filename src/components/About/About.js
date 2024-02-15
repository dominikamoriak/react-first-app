import styles from './About.module.scss';

const About = () => {
    return (
        <div>
            <h1 className={styles.title}>About</h1>
            <p className={styles.content}>Lorem Ipsum.</p>
        </div>
    );
};

export default About;