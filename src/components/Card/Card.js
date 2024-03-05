import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCardFavorite, getCardById, removeCard } from '../../redux/cardsRedux';

const Card = ({ cardId }) => {
    const card = useSelector(state => getCardById(state, cardId));

    const dispatch = useDispatch();
    const handleFavoriteToggle = () => 
        dispatch(toggleCardFavorite(cardId));
    
    const handleRemoveCard = () =>
        dispatch(removeCard(cardId));

    return (
        <li className={styles.card}>{card.title}
            <div className={styles.buttons}>
                <button className={clsx(styles.buttonFavorite, {
                        [styles.isFavorite]: card.isFavorite,
                        [styles.notFavorite]: !card.isFavorite})}
                    onClick={handleFavoriteToggle}>
                    <i className="fa fa-star-o" />
                </button>
                <button className={styles.buttonRemove}
                    onClick={handleRemoveCard}>
                    <i className="fa fa-trash" />
                </button>
            </div>
        </li>
    );
};

export default Card;