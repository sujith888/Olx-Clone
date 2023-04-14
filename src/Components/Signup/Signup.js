import React, { useState, useContext } from "react";
import Logo from "../../olx-logo.png";
import "./Signup.css";
import { FirebaseContext } from "../../Store/firebaseContex";
import { useHistory } from "react-router-dom";

export default function Signup() {
  const history = useHistory();
  const [Username, setUsername] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const { firebase } = useContext(FirebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({ displayName: Username }).then(() => {
          firebase
            .firestore()
            .collection("users")
            .add({ id: result.user.uid, username: Username, phone: phone })
            .then(() => {
              history.push("/login");
            })
            .catch((error) => {
              console.error("Error adding data to Firestore:", error);
            });
        });
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" alt="" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a href="/login">Login</a>
      </div>
    </div>
  );
}
