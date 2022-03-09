import React from "react";
import axios from "axios";

export const UserAPI = () => {
  // USER //
  const getDataUser = () => {
    axios.get("http://localhost:2000/users").then((res) => {
      console.log("called//....");
      console.log(res);
    });
  };
  const postDataUser = () => {
    var data = {
      firstName: "manav",
      lastName: "parmar",
      userName: "j",
      password: "jay@123",
    };

    axios.post("http://localhost:2000/users", data).then((res) => {
      alert("Upadate succesfully");
      console.log(res);
    });
  };
  const deleteDataUser = () => {
    var id = "6225b5b7bcecb1724d3555c2";

    axios.delete("http://localhost:2000/users/" + id).then((res) => {
      console.log(res);
    });
  };
  const putDataUser = () => {
    var id = "6225b5b7bcecb1724d3555c2";

    axios.put("http://localhost:2000/users/" + id).then((res) => {
      console.log(res);
    });
  };

  
  
  


  


  
  return (
    <div>
      // USERS //
      <br></br>
      <button onClick={getDataUser}>GetData User </button>
      <br></br>
      <button onClick={postDataUser}>postData User </button>
      <br></br>
      <button onClick={deleteDataUser}>deleteData User</button>
      <br></br>
      <button onClick={putDataUser}>UpadateData User</button>
      <br></br>
     
     
   
      
     
    </div>
  );
};
