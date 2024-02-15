import styles from './Favorite/module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
     return (
        <div>
            <PageTitle>Favorite</PageTitle>
            <p className={styles.content}>Lorem Ipsum.</p>
        </div>
    );
};

export default Favorite;