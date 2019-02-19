import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDqVXvVWcbWqNGo5Zg16lB1iPzlr0dFEoQ",
    authDomain: "research-ucla.firebaseapp.com",
    databaseURL: "https://research-ucla.firebaseio.com",
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;