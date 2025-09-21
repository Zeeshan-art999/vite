import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuJZx5XEBjEISGVPlJbT6t3d-44QVGaTM",
  authDomain: "batch-8-9e26a.firebaseapp.com",
  projectId: "batch-8-9e26a",
  storageBucket: "batch-8-9e26a.firebasestorage.app",
  messagingSenderId: "407160253122",
  appId: "1:407160253122:web:9489e81fc37a4750d7295b",
  measurementId: "G-F6S1DCRN3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
 export const db = getFirestore(app);