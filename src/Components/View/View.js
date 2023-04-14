import React, { useContext, useEffect, useState } from "react";

import "./View.css";
import { postContext } from "../../Store/postContext";
import { FirebaseContext } from "../../Store/firebaseContex";
function View() {
  const {postDetails}=useContext(postContext)
  const [userDetails, setuserDetails] = useState();
  const { firebase } = useContext(FirebaseContext);
  console.log(postDetails);
  console.log('view');
  const userId = postDetails ? postDetails.userId : null;
  
  useEffect(() => {
  
    firebase
      .firestore()
      .collection("users")
      .where("id", "==",userId)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          setuserDetails(doc.data());
        });
      });
  }, []);
  return (
    
    <div className="viewParentDiv">
    
      <div className="imageShowDiv">
      {postDetails &&
       <img src={postDetails.url} alt="" />
      }
  </div>
   
   
      <div className="rightSection">
      {postDetails &&
        <div className="productDetails">
          <p>&#x20B9;{postDetails.price}</p>
          <span></span>
          <p>{postDetails.name}</p>
          <span>{postDetails.category}</span>
        </div>
    }
    {userDetails&&  <div className="contactDetails">

          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>
        }
      </div>
    </div>
  );
}
export default View;
