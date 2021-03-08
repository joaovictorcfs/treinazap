import firebase from 'firebase';	

const firebaseConfig = {	
    apiKey: "AIzaSyDr0kK0EfuI-BTLBTXIHSZGDgXHBN-FkWQ",
    authDomain: "treinazapng.firebaseapp.com",
    projectId: "treinazapng",
    storageBucket: "treinazapng.appspot.com",
    messagingSenderId: "516534116824",
    appId: "1:516534116824:web:55e8740b55e0759151d2ad"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
