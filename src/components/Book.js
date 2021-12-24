import React from 'react';

const Book = ({ title, author }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
    </tr>
  );
};

export default Book;
