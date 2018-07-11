import { connect } from 'react-redux';
import { searchTwitterAction } from '../actions';
import SearchComponent from './SearchComponent';

const mapDispatchToProps = (dispatch) => {
    return {
      search: (value) => dispatch(searchTwitterAction(value))
    }
  };
  
const Search = connect(null, mapDispatchToProps)(SearchComponent);
  
export default Search;