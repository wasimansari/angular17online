import { initializeApp } from "firebase/app";


const firebaseConfig = {
    // apiKey: "AIzaSyAn2AT5_cunmtXF4-qS3gVG6t2yCV88gZM",
    // authDomain: "weather-app-ak.firebaseapp.com",
    // projectId: "weather-app-ak",
    // storageBucket: "weather-app-ak.firebasestorage.app",
    // messagingSenderId: "629638920436",
    // appId: "1:629638920436:web:6622e946667083f52446a1",
    // measurementId: "G-F5FBE8PLC3",
    // databaseURL:"https://weather-app-ak-default-rtdb.firebaseio.com"
    apiKey: "AIzaSyDnvjMeVZepl6b9004rJSM97qFc0mcLj6Q",
    authDomain: "online-test-132a4.firebaseapp.com",
    projectId: "online-test-132a4",
    storageBucket: "online-test-132a4.firebasestorage.app",
    messagingSenderId: "175932878166",
    appId: "1:175932878166:web:625f934374bd72eadebaf7",
    databaseURL:"https://online-test-132a4-default-rtdb.firebaseio.com"
  };

  export const firebaseApp = initializeApp(firebaseConfig);