import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhMuzoAIeMRDp5PESqgAT7s-VdwDXq2OM",
    authDomain: "whatsapp-adccc.firebaseapp.com",
    projectId: "whatsapp-adccc",
    storageBucket: "whatsapp-adccc.appspot.com",
    messagingSenderId: "997478211511",
    appId: "1:997478211511:web:e160d48b055e5e3a9f9232",
    measurementId: "G-MBMMFDE6S6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;


