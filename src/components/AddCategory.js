import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ( e ) => {
    setInputValue(e.target.value)
  }

// El handleSubmit agrega valores al form al darle enter

  const handleSubmit = ( e ) => {
    e.preventDefault() // Previene que el form recargue la página

    if(inputValue.trim().length > 2) {
      setCategories( cats => [...cats, inputValue]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={inputValue}
        onChange={ handleInputChange }
      />
    </form>
  )
}


AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}