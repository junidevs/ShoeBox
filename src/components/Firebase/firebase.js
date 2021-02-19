import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDM1WvuB_Sqs1spMMDoIBI9S8Ptfxpdw0E",
  authDomain: "shoebox-b9ee6.firebaseapp.com",
  projectId: "shoebox-b9ee6",
  storageBucket: "shoebox-b9ee6.appspot.com",
  messagingSenderId: "337609530665",
  appId: "1:337609530665:web:1108b80c8805558c7dab38",
  measurementId: "G-K8WCGZ3376"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);

      this.auth = app.auth();
      
    }
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
     
    doSignOut = () => this.auth.signOut();
    
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
}
   
  export default Firebase;