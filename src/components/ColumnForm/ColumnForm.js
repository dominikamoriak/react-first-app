import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addColumn } from '../../redux/store';
import TextInput from '../TextInput/TextInput';
import { getColumnsByListId } from '../../redux/store';

const ColumnForm = ({ listId }) => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const columns = useSelector(state => getColumnsByListId(state, listId));

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId }));
        setTitle('');
        setIcon('');
    }

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
        <span className={styles.span}>Title:</span>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
        <span className={styles.span}>Icon:</span>
            <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
                <div className={styles.columnCount}>
                    {columns.length}columns
                </div>
        </form>
	);
};

export default ColumnForm;