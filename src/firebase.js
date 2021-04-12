import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyARl7Wfigj8kjdEmBbow5qlu33QKoLoZuE",
  authDomain: "slack-clone-31fe6.firebaseapp.com",
  projectId: "slack-clone-31fe6",
  storageBucket: "slack-clone-31fe6.appspot.com",
  messagingSenderId: "200320253260",
  appId: "1:200320253260:web:ea9ab158142cca502923e9",
  measurementId: "G-97CZ5GYNFN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
