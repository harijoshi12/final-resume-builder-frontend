
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCLCVk6nOgHuP5EU88LlnfK7thET-Dvb2Y",
  authDomain: "resume-builder-75874.firebaseapp.com",
  projectId: "resume-builder-75874",
  storageBucket: "resume-builder-75874.appspot.com",
  messagingSenderId: "1035469354495",
  appId: "1:1035469354495:web:f2fd570a136deda1e523ca",
  measurementId: "G-PKN3MF1SDN"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app)


// if(!firebase.apps.length){
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
// }