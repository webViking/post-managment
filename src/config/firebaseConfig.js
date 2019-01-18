 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'
 
 // Initialize Firebase
 let config = {
    apiKey: "AIzaSyBZuZxcvVOojIhtTIlSFrLTXOlLaH4lsoA",
    authDomain: "post-managment-project.firebaseapp.com",
    databaseURL: "https://post-managment-project.firebaseio.com",
    projectId: "post-managment-project",
    storageBucket: "post-managment-project.appspot.com",
    messagingSenderId: "618921373245"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true})
  
  
  export default firebase