import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getCardsByIsFavorite } from '../../redux/cardsRedux';
import { Navigate } from 'react-router-dom';

const Favorite = () => {
    const favoriteCards = useSelector(state => getCardsByIsFavorite(state));

    const isEmpty = favoriteCards.length === 0;
    if(isEmpty) return <Navigate to="/noCards" />

     return (
        <div>
            <PageTitle>Favorite</PageTitle>
            <article className={styles.column}>
                <ul className={styles.cards}>
                    {favoriteCards.map(card => (
                        <Card 
                        key={card.id} 
                        title={card.title}
                        isFavorite={card.isFavorite}
                        cardId={card.id} />
                    ))}
                </ul>
                <div className={styles.cardsCount}>
                    {favoriteCards.length} cards
                </div>
            </article>
        </div>
    );
};

export default Favorite;