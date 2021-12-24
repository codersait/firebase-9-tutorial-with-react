import React, { useEffect, useState } from 'react';
import { getBooks } from '../firebase-config';
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
  return (
    <div className='container'>
      <table>
        <thead>
          <th>Title</th>
          <th>Author</th>
        </thead>
        <tbody>
          {books.map(book => (
            <Book {...book} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
