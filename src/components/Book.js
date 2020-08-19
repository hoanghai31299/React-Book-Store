import React from 'react';
import './components.css/Book.css';
const Book = ({name,image,author,price,description,language}) => {
  return (
    <div className = "book-wrapper">
        <div className = "book-cover">
            <img alt="book" className="img-fluid" src = {image} />
            <span>{price}$</span>
        </div>
        <div className = "book-info">
            <span>{name}</span>
            <p>{description}</p>
        </div>
    </div>
  );
};

export default Book;