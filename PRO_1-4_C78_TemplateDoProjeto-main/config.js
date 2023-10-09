import firebase from "firebase";
require("@firebase/firestore");


  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyC6tXklE2XfJSsE4SZLQxMAlWTKPKD2EFk",
    authDomain: "sigima-3345b.firebaseapp.com",
    projectId: "sigima-3345b",
    storageBucket: "sigima-3345b.appspot.com",
    messagingSenderId: "777673921929",
    appId: "1:777673921929:web:f1cd31f682bb648092bd58"
  };
  


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
