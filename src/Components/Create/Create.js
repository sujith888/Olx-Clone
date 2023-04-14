import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { useForm } from "./Customhook";
import { AuthContext, FirebaseContext } from "../../Store/firebaseContex";
import {useHistory} from 'react-router-dom'
const Create = () => {
  const history =useHistory()
  const [image, setimage] = useState(null);
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  const [values, handleChange] = useForm({
    Name: "",
    Price: "",
    category: "",
  });
  const date = new Date();
  const handleSubmit = () => {
    firebase
      .storage()
      .ref(`image/${image.name}`)
      .put(image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          console.log(url);
          firebase.firestore().collection("products").add({
            name: values.Name,
            category: values.category,
            price: values.Price,
            url: url,
            userId: user.uid,
            createdAt: date.toDateString(),
          });
         
        });
      });
      history.push('/')
  };
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="Name"
              name="Name"
              value={values.Name}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="category"
              name="category"
              value={values.category}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
              className="input"
              type="number"
              id="price"
              name="Price"
              value={values.Price}
              onChange={handleChange}
            />
            <br />
          </form>
          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={image ? URL.createObjectURL(image) : ""}
          ></img>

          <br />
          <input
            type="file"
            onChange={(e) => {
              setimage(e.target.files[0]);
            }}
          />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">
            upload and Submit
          </button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
