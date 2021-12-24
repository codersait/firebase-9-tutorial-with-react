import { initializeApp } from 'firebase/app';
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

// init firebase
export const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// * collection ref
const colRef = collection(db, 'books');

// * get collection data

export const getBooks = async () => {
  const snapshot = await getDocs(colRef);
  const books = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  // ?get data
  // console.log(snapshot.docs[0].data());
  // ?get id
  //console.log(snapshot.docs[0].id);
  return books;
};
// * adding docs
export const addBook = async ({ title, author }) => {
  await addDoc(colRef, {
    title,
    author
  });
};

// * deleting docs
export const deleteBook = async id => {
  const docRef = doc(db, 'books', id);
  await deleteDoc(docRef);
};
