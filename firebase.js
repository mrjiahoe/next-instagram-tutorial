// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDTNgBbnEHahsw60Ypn8aPbCD5nJRnhuvo",
	authDomain: "next-instagram-tutorial.firebaseapp.com",
	projectId: "next-instagram-tutorial",
	storageBucket: "next-instagram-tutorial.appspot.com",
	messagingSenderId: "24604429628",
	appId: "1:24604429628:web:fac500778962fda41e2239",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
