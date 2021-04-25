import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDD4zXuXy-9A6aGyXuvee8UTi-91WSnAiY",
    authDomain: "cadastro-clientes-4594c.firebaseapp.com",
    databaseURL: "https://cadastro-clientes-4594c-default-rtdb.firebaseio.com",
    projectId: "cadastro-clientes-4594c",
    storageBucket: "cadastro-clientes-4594c.appspot.com",
    messagingSenderId: "831555174919",
    appId: "1:831555174919:web:2661695035160a73d920a2"
  };

let fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();