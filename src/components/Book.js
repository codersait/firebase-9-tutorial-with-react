import React from 'react';

const Book = ({ title, author, id, handleDelete }) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td>
        <button className='delete' onClick={() => handleDelete(id)}>
          delete
        </button>
        <button className='edit'>edit</button>
      </td>
    </tr>
  );
};

export default Book;
