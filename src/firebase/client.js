import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    // Aca va el objeto que nos da Firebase:
    apiKey: "AIzaSyDJVY5l7WSb1l8ZIR38clRgLxiBwW7cJgc",
    authDomain: "ecommerce-massimo.firebaseapp.com",
    projectId: "ecommerce-massimo",
    storageBucket: "ecommerce-massimo.firebasestorage.app",
    messagingSenderId: "924093198624",
    appId: "1:924093198624:web:f84f1f4169486bc7d96745"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)