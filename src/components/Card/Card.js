import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCardFavorite, getCardById } from '../../redux/cardsRedux';

const Card = ({ cardId }) => {
    const card = useSelector(state => getCardById(state, cardId));

    const dispatch = useDispatch();
    const handleFavoriteToggle = () => 
        dispatch(toggleCardFavorite(cardId));

    return (
        <li className={styles.card}>{card.title}
            <button className={clsx(styles.buttonFavorite, {
                    [styles.isFavorite]: card.isFavorite,
                    [styles.notFavorite]: !card.isFavorite})}
                onClick={handleFavoriteToggle}>
                <i className="fa fa-star-o" />
            </button>
        </li>
    );
};

export default Card;