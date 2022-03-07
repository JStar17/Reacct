import React from "react";
import axios from "axios";

export const API = () => {
  const getData = () => {
    axios.get("http://localhost:2000/users").then((res) => {
      console.log("called//....");
      console.log(res.data.data);
    });
  };
  const postData = () => {
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
  const deleteData = () => {
    var id = "6225b5b7bcecb1724d3555c2";

    axios.delete("http://localhost:2000/users/" + id).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
      <button onClick={getData}>GetData</button>
      <br></br>
      <button onClick={postData}>postData</button>
      <br></br>

      <button onClick={deleteData}>deleteData</button>
    </div>
  );
};
