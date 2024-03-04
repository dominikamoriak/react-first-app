import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { getCardsByColumnId, addCard } from '../../redux/store';

const CardForm = ({ columnId }) => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const cards = useSelector(state => getCardsByColumnId(state, columnId));

    const handleSubmit = e => {
        e.preventDefault();
        console.log('handleSubmit - before dispatch', columnId, title);        
        dispatch(addCard({ card: {title, columnId} }));
        console.log('handleSubmit - after dispatch');
        setTitle('');
    };

	return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
            <div className={styles.cardCount}>
                {cards.length} cards
            </div>
        </form>
	);
};

export default CardForm;