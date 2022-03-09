import React from "react";
import axios from "axios";

export const UserDetailApi = () => {

    // USERDETAILS

  const getDataUserDetail = () => {
    axios.get("http://localhost:2000/userdetails").then((res) => {
      console.log("called//....");
      console.log(res.data.data);
    });
  };
  const postDataUserDetail = () => {
    var data = {
      firstName: "manav",
      lastName: "parmar",
      userName: "j",
      password: "jay@123",
    };

    axios.post("http://localhost:2000/userdetails", data).then((res) => {
      alert("Upadate succesfully");
      console.log(res);
    });
  };
  const deleteDataUserDetail = () => {
    var id = "6225b5b7bcecb1724d3555c2";

    axios.delete("http://localhost:2000/userdetails" + id).then((res) => {
      console.log(res);
    });
  };
  const putDataUserDetail = () => {
    var id = "6225b5b7bcecb1724d3555c2";

    axios.put("http://localhost:2000/userdetails" + id).then((res) => {
      console.log(res);
    });
  };

  return (
       // USERDETAILS //
       <div>
       <br></br>
       <button onClick={getDataUserDetail}>GetData User Detail </button>
       <br></br>
       <button onClick={postDataUserDetail}>postData User Detail </button>
       <br></br>
       <button onClick={deleteDataUserDetail}>deleteData User Detail</button>
       <br></br>
       <button onClick={putDataUserDetail}>UpadateData User Detail</button>
       <br></br>
</div>

  )
}