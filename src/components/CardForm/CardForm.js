import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { getCardsByColumnId } from '../../redux/store';

const CardForm = ({ columnId }) => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const cards = useSelector(state => getCardsByColumnId(state, columnId));

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({
            type: 'ADD_CARD',
            payload: {
                columnId,
                card: {
                    title
                }
            }
        });
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