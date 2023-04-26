import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';


const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon }));
        setTitle('');
        setIcon('');
    }

    const dispatch = useDispatch();

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
        <span className={styles.span}>Title:</span>
            <input className={styles.input} type="text" value={title} 
                onChange={e => setTitle(e.target.value)} />
        <span className={styles.span}>Icon:</span>
            <input className={styles.input} type="text" value={icon} 
	            onChange={e => setIcon(e.target.value)} />
            <span className={styles.button}><Button>Add column</Button></span>
        </form>
	);
};

export default ColumnForm;