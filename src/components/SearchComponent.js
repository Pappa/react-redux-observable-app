import React from 'react';

const SearchComponent = ({ search }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    search(e);
  }

  return (
      <form onSubmit={ onSubmit }>
        <input /> <button type="submit"> Search </button>
      </form>
  )
}

export default SearchComponent;