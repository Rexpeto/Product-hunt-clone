import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";

class Firebase {
    constructor() {
        const app = initializeApp(firebaseConfig);
    }
}

const firebase = new Firebase();
export default firebase;
