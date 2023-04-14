import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{FirebaseContext} from './Store/firebaseContex'
import firebase from './Components/Firebase/Config';
import Context from './Store/firebaseContex'

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase }}>
<Context>
<App />
</Context>
</FirebaseContext.Provider>,
 document.getElementById('root'));
