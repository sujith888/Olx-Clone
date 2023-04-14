import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { AuthContext, FirebaseContext } from "./Store/firebaseContex";
import Create from "./Pages/Create";
import View from "./Components/View/View";
import Post from "./Store/postContext";
/**
 * ?  =====Import Components=====
 */

function App() {
  const { setuser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setuser(user);
    });
  });

  return (
    <div>
      <Post>
      <Router>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/view">
          <View />
        </Route>
      </Router>
      </Post>
    </div>
  );
}

export default App;
