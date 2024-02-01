import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { serverTimestamp } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFI8jfCr19xMwr8Hbpdj5VCGmiCCfAaZ4",
    authDomain: "dev-trivia-9f984.firebaseapp.com",
    projectId: "dev-trivia-9f984",
    storageBucket: "dev-trivia-9f984.appspot.com",
    messagingSenderId: "170568231111",
    appId: "1:170568231111:web:4bf612017d9582d38af6e2",
    measurementId: "G-375JLRYGZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const projectFirestore = getFirestore(app);

const analytics = getAnalytics(app);
const timestamp = serverTimestamp;  // Do not call as a function here

export { projectFirestore, analytics, timestamp };