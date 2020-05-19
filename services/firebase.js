import firebase from "firebase/app";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDMCCqeySrFGbIB1hFk1nLAc3KV5MGEzJM",
    authDomain: "kits-fdef7.firebaseapp.com",
    databaseURL: "https://kits-fdef7.firebaseio.com",
    projectId: "kits-fdef7",
    storageBucket: "kits-fdef7.appspot.com",
    messagingSenderId: "600515144217",
    appId: "1:600515144217:web:f949140027f3b2519d5888",
    measurementId: "G-5P88ENR4VZ"
};

!firebase.apps.length ? firebase.initializeApp(config) : "";

export const auth = firebase.auth();