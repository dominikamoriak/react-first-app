import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title, icon: icon });
        setTitle('');
        setIcon('');
    }

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