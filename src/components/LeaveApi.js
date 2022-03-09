import React from "react";
import axios from "axios";

export const LeaveApi = () => {
    
  // Leave //

  const getDataLeave = () => {
    axios.get("http://localhost:2000/leave").then((res) => {
      console.log("called//....");
      console.log(res.data.data);
    });
  };
  const postDataLeave = () => {
    var data = {
      firstName: "manav",
      lastName: "parmar",
      userName: "j",
      password: "jay@123",
    };

    axios.post("http://localhost:2000/leave", data).then((res) => {
      alert("Upadate succesfully");
      console.log(res);
    });
  };
  const deleteDataLeave = () => {
    var id = "6225b5b7bcecb1724d3555c2";

    axios.delete("http://localhost:2000/leave" + id).then((res) => {
      console.log(res);
    });
  };
  const putDataLeave = () => {
    var id = "6225b5b7bcecb1724d3555c2";

    axios.put("http://localhost:2000/leave" + id).then((res) => {
      console.log(res);
    });
  };






return (
    <div>   
    // Leave //
    <br></br>
    <button onClick={getDataLeave}>GetData Leave </button>
    <br></br>
    <button onClick={postDataLeave}>postData Leave </button>
    <br></br>
    <button onClick={deleteDataLeave}>deleteData Leave</button>
    <br></br>
    <button onClick={putDataLeave}>UpadateData Leave </button>
    <br></br>






    </div>






)
}