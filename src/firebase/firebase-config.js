import  firebase from  'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
};

// const firebaseConfigTesting = {
//     apiKey: "AIzaSyBqitUaYKn_2Jk5Fu4B49swbPtG8oDbEDs",
//     authDomain: "redux-demo-34e4a.firebaseapp.com",
//     databaseURL: "https://redux-demo-34e4a.firebaseio.com",
//     projectId: "redux-demo-34e4a",
//     storageBucket: "redux-demo-34e4a.appspot.com",
//     messagingSenderId: "82677216063",
//     appId: "1:82677216063:web:43e7f7197de23db5c0d98a"
// };

// if( process.env.NODE_ENV === 'test' ){
//     //testing
//     firebase.initializeApp(firebaseConfigTesting);

// }else{
//     //dev/prod
//     firebase.initializeApp(firebaseConfig);
// }

    firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    firebase,
    db,
    googleAuthProvider,
}
