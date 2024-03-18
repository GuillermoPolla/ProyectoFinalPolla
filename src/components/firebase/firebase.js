import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj2sL1oyZaSwULFoClDID5VIfbaB52vZ0",
  authDomain: "react-5d958.firebaseapp.com",
  projectId: "react-5d958",
  storageBucket: "react-5d958.appspot.com",
  messagingSenderId: "782477615741",
  appId: "1:782477615741:web:d355e67683a04cd36ac714",
  measurementId: "G-7P6XBR75C2"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  
export default app;
