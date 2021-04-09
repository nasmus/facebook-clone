import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBAEflw3nS3zgPH3C7d3wQt-UgZVUEyhWg",
    authDomain: "fb-clone-b4a6c.firebaseapp.com",
    projectId: "fb-clone-b4a6c",
    storageBucket: "fb-clone-b4a6c.appspot.com",
    messagingSenderId: "741246823343",
    appId: "1:741246823343:web:496eaed0dc770c2c1f5d5a",
    measurementId: "G-XZ9QJ7TMRN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;