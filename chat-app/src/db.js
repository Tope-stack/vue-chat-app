import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyBef69W8Xif0nJWI5etY6Yy_Laiv45f0Gk",
    authDomain: "firechatvue-89732.firebaseapp.com",
    projectId: "firechatvue-89732",
    storageBucket: "firechatvue-89732.appspot.com",
    messagingSenderId: "606857956798",
    appId: "1:606857956798:web:187e4b7e4d52e599d03def"
}

const db = firebase.initializeApp(config);
export default db;