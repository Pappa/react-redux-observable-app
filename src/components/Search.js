import React from 'react';
import { connect } from 'react-redux';
import { searchTwitterAction } from '../actions';

const Search = ({ search }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    search(e);
  }

  return (
      <form onSubmit={ onSubmit }>
        <input /> <button type="submit"> Search </button>
      </form>
  )
};

const mapDispatchToProps = { search: searchTwitterAction };
  
export default connect(null, mapDispatchToProps)(Search);