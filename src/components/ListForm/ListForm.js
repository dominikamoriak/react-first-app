import styles from './ListForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllLists, addList } from '../../redux/listsRedux';

const ListForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const lists = useSelector(getAllLists);

    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description }));
        setTitle('');
        setDescription('');
    }

    return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <span className={styles.span}>Title:</span>
                <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <span className={styles.span}>Description:</span>
                <TextInput value={description} onChange={e => setDescription(e.target.value)} />
            <Button>Add list</Button>
            <div className={styles.listCount}>
                {lists.length} lists
            </div>
        </form>
    );
};

export default ListForm;