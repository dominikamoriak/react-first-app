import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchString, updateSearchString } from '../../redux/store';
import { useState } from 'react';

const SearchForm = () => {
    const dispatch = useDispatch();
    const searchString = useSelector(getSearchString);
    const [value, setValue] = useState(searchString);
  
    const handleSubmit = e => {
      e.preventDefault();
      dispatch(updateSearchString(value));
    }  

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." name="search" value={value} onChange={(e) => {setValue(e.target.value)}}/>
            <Button type="submit">
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;