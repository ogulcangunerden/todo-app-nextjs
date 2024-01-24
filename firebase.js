import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfeYevmpKN9cGy2cZVdPpGnoBXCGC2750",
  authDomain: "todoapp-df90a.firebaseapp.com",
  projectId: "todoapp-df90a",
  storageBucket: "todoapp-df90a.appspot.com",
  messagingSenderId: "698495455571",
  appId: "1:698495455571:web:1953ec07a22784330091a6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
