import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';
import { getSearchString } from '../../redux/searchStringRedux';

const Column = props => {
    const { id, title, icon } = props;
    const searchString = useSelector(getSearchString);
    const cards = useSelector(state => getFilteredCards(state, props.id, searchString));
    
    return (
    <article className={styles.column}>
        <span className={styles.icon + ' fa fa-' + icon} />
        <h2 className={styles.title}>{title}</h2>

        <ul className={styles.cards}>
	        {cards.map(card => (<Card key={card.id} cardId={card.id} />))}
        </ul>
            <CardForm columnId={id} />
    </article>);
};

export default Column;