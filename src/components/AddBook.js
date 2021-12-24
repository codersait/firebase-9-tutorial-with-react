import React, { useState } from 'react';
import { addBook } from '../firebase-config';

const AddBook = () => {
  const [book, setBook] = useState({});
  const handleChange = e => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    try {
      addBook(book);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <form className='container' onSubmit={handleSubmit}>
      <label htmlFor='title'>Title:</label>
      <input type='text' name='title' required onChange={handleChange} />
      <label htmlFor='author'>Author:</label>
      <input type='text' name='author' required onChange={handleChange} />
      <button type='submit'>add a new book</button>
    </form>
  );
};

export default AddBook;
