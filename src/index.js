import React from 'react';
import ReactDOM from 'react-dom';
import "react-colorful/dist/index.css";
import App from './App';
import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render( 
    <FirebaseContext.Provider value={new Firebase()}>
         <App />
    </FirebaseContext.Provider>,document.getElementById('root')
);
