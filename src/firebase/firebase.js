import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCJWroqvXdWPjxkQJzIMoFW5uFTCyKe4EA",
    authDomain: "amaz0n-clone-707jk.firebaseapp.com",
    projectId: "amaz0n-clone-707jk",
    storageBucket: "amaz0n-clone-707jk.appspot.com",
    messagingSenderId: "831366421959",
    appId: "1:831366421959:web:061b82529d26bc6eef8de2",
    measurementId: "G-M174M0781J"
}

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth }