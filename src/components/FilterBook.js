import React from 'react';
import './components.css/Book.css';
import { Button, Input } from 'reactstrap'
const FilterBook = ({handleChange,handleSearch,handleChangeFilter}) => {
  return (
    <div className = "book-filter d-flex flex-row bd-highlight pt-3" >
        <Input type="text" name="name" id="name"
         placeholder="search books by name"
         onChange={handleChange} />
        <Button onClick = {handleSearch}>Search</Button>
        <select onChange={handleChangeFilter} defaultValue="sort">
          <option disabled value="sort">Sort</option>
          <option value="cheapest">Cheapest</option>
          <option value="highest">Highest</option>
        </select>
    </div>
  );
};

export default FilterBook;