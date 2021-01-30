import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAK7gcRU13-fi1uHtd_EhrGbc1R0ojLVRg",
  authDomain: "linkedin-clone-9e521.firebaseapp.com",
  projectId: "linkedin-clone-9e521",
  storageBucket: "linkedin-clone-9e521.appspot.com",
  messagingSenderId: "271773319109",
  appId: "1:271773319109:web:6533efde4c1a4d79be15ac"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };