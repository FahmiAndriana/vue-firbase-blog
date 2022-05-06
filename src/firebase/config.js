import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCTCnQsZ7YJb2p6up5rc-EQQwocvQLz5-c",
    authDomain: "vueblogwithfirebase.firebaseapp.com",
    projectId: "vueblogwithfirebase",
    storageBucket: "vueblogwithfirebase.appspot.com",
    messagingSenderId: "616235018571",
    appId: "1:616235018571:web:5e920248ee31bd8933a0ce"
  };


  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()

  export{ projectFirestore }