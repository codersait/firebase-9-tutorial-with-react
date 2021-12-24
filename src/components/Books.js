import React, { useEffect, useState } from 'react';
import { deleteBook, getBooks } from '../firebase-config';
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
  const handleDelete = id => {
    console.log(id);
    deleteBook(id);
  };
  return (
    <div className='container'>
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
