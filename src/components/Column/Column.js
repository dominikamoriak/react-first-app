import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = props => {
    const { id, title, icon } = props;
    const cards = useSelector(state => state.cards);

    return (
    <article className={styles.column}>
        <span className={styles.icon + ' fa fa-' + icon} />
        <h2 className={styles.title}>{title}</h2>

        <ul className={styles.cards}>
            {cards.map(card => <li key={card.id}>{card.title}</li>)}
        </ul>

        <ul className={styles.cards}>
	        {cards.map(card => <Card key={card.id} title={card.title} />)}
        </ul>
            <CardForm columnId={id} 
            action={newCard => props.action(newCard, id)} />
    </article>);
};

export default Column;