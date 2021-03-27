import firebase from 'firebase';
import firebaseConfig from '../../config/firebase-config';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export default db;