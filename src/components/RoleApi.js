import React from "react";
import axios from "axios";

export const RoleApi = () => {
    // Roles //
  const getDataRole = () => {
    axios.get("http://localhost:2000/roles").then((res) => {
      console.log("called//....");
      console.log(res);
    });
  };
  const postDataRole = () => {
    var data = {
      firstName: "manav",
      lastName: "parmar",
      userName: "j",
      password: "jay@123",
    };

    axios.post("http://localhost:2000/roles", data).then((res) => {
      alert("Upadate succesfully");
      console.log(res);
    });
  };
  const deleteDataRole = () => {
    var id = "6225b5b7bcecb1724d3555c2";

    axios.delete("http://localhost:2000/roles" + id).then((res) => {
      console.log(res);
    });
  };
  const putDataRole = () => {
    var id = "6225b5b7bcecb1724d3555c2";

    axios.put("http://localhost:2000/roles" + id).then((res) => {
      console.log(res);
    });
  };

  return (
    <div>
     // ROLES//
      <br></br>
      <button onClick={getDataRole}>GetData Role </button>
      <br></br>
      <button onClick={postDataRole}>postData Role </button>
      <br></br>
      <button onClick={deleteDataRole}>deleteData Role</button>
      <br></br>
      <button onClick={putDataRole}>UpadateData Role</button>
      <br></br>


    </div>
  )
}