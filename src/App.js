// import { useEffect } from 'react';
import Books from './components/Books';
import { getBooks } from './firebase-config';
function App() {
  return (
    <div className='App'>
      <h1 className='page-title'>Firebase 9 Tutorial</h1>
      <Books />
    </div>
  );
}

export default App;
