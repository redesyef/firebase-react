import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC2s3b2KmyLWsnRAl0jVJ5qzc8yx4igArI",
  authDomain: "codigofacilito-968b7.firebaseapp.com",
  projectId: "codigofacilito-968b7",
  storageBucket: "codigofacilito-968b7.appspot.com",
  messagingSenderId: "98875623931",
  appId: "1:98875623931:web:eac250b175125d5e27e35e",
  measurementId: "G-SG5VXWEJRN"
};


const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(firebaseApp)
export default firebaseApp