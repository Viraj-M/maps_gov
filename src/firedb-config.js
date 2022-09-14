import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBXbnPKxxoBbx9YvavSB89YRHGuGuC9J5E",
    authDomain: "mapstest-85f82.firebaseapp.com",
    projectId: "mapstest-85f82",
    storageBucket: "mapstest-85f82.appspot.com",
    messagingSenderId: "757011235702",
    appId: "1:757011235702:web:35285a847d977b81f7f057"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);