import React, { useEffect, useState } from 'react';
import { addBook, deleteBook, getBooks } from '../firebase-config';
import AddBook from './AddBook';
import Book from './Book';

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    try {
      (async () => {
        const books = await getBooks();
        setBooks(books);
      })();
    } catch (err) {
      console.log(err.message);
    }
  }, []);
  const handleDelete = async id => {
    console.log(id);
    await deleteBook(id);
    const books = await getBooks();
    setBooks(books);
  };
  const handleSubmit = async e => {
    console.log('e', e);
    // console.log('book', book);
    e.preventDefault();
    try {
      // await addBook(book);
      const books = await getBooks();
      setBooks(books);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className='container'>
      <AddBook handleSubmit={handleSubmit} />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <Book key={book.id} {...book} handleDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
