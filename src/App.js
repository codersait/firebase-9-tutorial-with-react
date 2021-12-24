// import { useEffect } from 'react';
import Books from './components/Books';
import AddBook from './components/AddBook';
function App() {
  return (
    <div className='App'>
      <h1 className='page-title'>Firebase 9 Tutorial</h1>
      <AddBook />
      <Books />
    </div>
  );
}

export default App;
