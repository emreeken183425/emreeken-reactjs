import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey:"AIzaSyDT7nMjrZjErWnzRaoTbD0MEUda8DboKX0",
    authDomain:process.env.REACT_APP_authDomain,
    projectId:process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId:process.env.REACT_APP_measurementId




};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email:any, password:any) => {
    //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    try {
      let userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      
    console.log(userCredential);
    
     
    } catch (err) {
      console.log(err);
      
    }
  };

export const signIn=async (email:any, password:any)=>{
    try {
        let userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
       
      console.log(userCredential);
      
       
      } catch (err) {
        console.log(err);
        
      }
}

export const userObserver = (setCurrentUser:any) => {
  //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
      console.log(user);
      
    } else {
      // User is signed out
      setCurrentUser(false);
    }
  });
};

export const logOut = () => {
  signOut(auth);
};