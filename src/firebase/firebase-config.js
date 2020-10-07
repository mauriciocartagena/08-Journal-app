import  firebase from  'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCrBiLD7cpyRuOR6RpmAA0ubNQFXNACnoI",
    authDomain: "react-app-cursos-2ff71.firebaseapp.com",
    databaseURL: "https://react-app-cursos-2ff71.firebaseio.com",
    projectId: "react-app-cursos-2ff71",
    storageBucket: "react-app-cursos-2ff71.appspot.com",
    messagingSenderId: "96306682559",
    appId: "1:96306682559:web:53bd28eb4f62b17044840a"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    firebase,
    db,
    googleAuthProvider,
}
