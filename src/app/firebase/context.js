"use client";
import firebase from "./firebase";
import { createContext } from "react";

const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {
    return (
        <FirebaseContext.Provider value={firebase}>
            {children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseContext;
