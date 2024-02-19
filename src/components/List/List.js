import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getColumnsByList, getListById } from '../../redux/store';
import { useParams } from 'react-router';

const List = () => {
  const { listId } = useParams();
  const columns = useSelector(state => getColumnsByList(state, listId));
  const listData = useSelector(state => getListById(state, listId));

    return (
      <div className={styles.list}>
          <header className={styles.header}>
              <h2 className={styles.title}>{listData.title}<span>soon!</span></h2>
          </header>
          <p className={styles.description}>{listData.description}</p>
          <section className={styles.columns}>
               {columns.map(column => 
               <Column key={column.id} {...column} />)}
          </section>
          <ColumnForm listId={listId}/>
      </div>
    );
  };
  
  
  export default List;