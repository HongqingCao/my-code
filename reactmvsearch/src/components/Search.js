 import React from 'react';
 import PropTypes from 'prop-types';

const Search = props => (
  <form className="search" onInput={event => props.onInput(event.target.value)}>
    <input type="search" value={props.query} placeholder={props.placeholder} />
  </form>
);

Search.propTypes = {
  query      : PropTypes.string.isRequired,
  onInput    : PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

 export default Search;
