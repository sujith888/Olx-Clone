import React, { useContext, useState } from 'react'; 
import Logo from '../../olx-logo.png';
import './Login.css';
import {FirebaseContext} from '../../Store/firebaseContex'
 import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
function Login() {
  const history=useHistory();
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const {firebase}=useContext(FirebaseContext)
  const handleChanngeLogin=(e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
     history.push('/')
    }).catch((error)=>{
     alert(error)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt=''></img>
        <form onSubmit={handleChanngeLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>{
              setemail(e.target.value)
            }}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>{
              setpassword(e.target.value)
            }}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a  href='/signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
