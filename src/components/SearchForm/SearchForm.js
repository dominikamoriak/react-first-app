import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchString } from '../../redux/store';

const SearchForm = () => {
    const dispatch = useDispatch();
    const searchString = useSelector(state => state.searchString);
  
    const handleSubmit = e => {
      e.preventDefault();
      dispatch(updateSearchString(e.target.elements.search.value));
    }  

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." name="search" defaultValue={searchString}/>
            <Button type="submit">
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;