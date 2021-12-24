import React, { useState } from 'react';
import { addBook } from '../firebase-config';

const AddBook = ({ handleSubmit }) => {
  const [book, setBook] = useState({});
  const handleChange = e => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  return (
    <form className='container' onSubmit={() => handleSubmit(book)}>
      <label htmlFor='title'>Title:</label>
      <input type='text' name='title' required onChange={handleChange} />
      <label htmlFor='author'>Author:</label>
      <input type='text' name='author' required onChange={handleChange} />
      <button type='submit'>add a new book</button>
    </form>
  );
};

export default AddBook;
