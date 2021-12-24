import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyA2iWseBFmQG4Ui2MmKuOthW6TMNhGDn0E',
  authDomain: 'fir-tutorial-ff4de.firebaseapp.com',
  projectId: 'fir-tutorial-ff4de',
  storageBucket: 'fir-tutorial-ff4de.appspot.com',
  messagingSenderId: '334587997053',
  appId: '1:334587997053:web:ecd987a9ca9ea3d3e4fa14'
};

// init firebase
export const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, 'books');

// get collection data

export const getBooks = async () => {
  const snapshot = await getDocs(colRef);
  const books = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  // ?get data
  // console.log(snapshot.docs[0].data());
  // ?get id
  //console.log(snapshot.docs[0].id);
  return books;
};
