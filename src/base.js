import Rebase from 're-base';
import firebase from 'firebase';
import * as database from 'firebase/database'

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

const firebaseApp = firebase.initializeApp({
    apiKey: API_KEY,
    authDomain: "research-ucla.firebaseapp.com",
    databaseURL: "https://research-ucla.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());
var provider = new firebase.auth.GoogleAuthProvider();
// This is a named export
export { firebaseApp, provider };

// This is a default export
export default base;