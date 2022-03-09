import React from "react";
import axios from "axios";

export const RelativeApi = () => {
    // Relatives  //

  const getDataRelative = () => {
    axios.get("http://localhost:2000/userrelative").then((res) => {
      console.log("called//....");
      console.log(res.data.data);
    });
  };
  const postDataRelative = () => {
    var data = {
      firstName: "manav",
      lastName: "parmar",
      userName: "j",
      password: "jay@123",
    };

    axios.post("http://localhost:2000/userrelative", data).then((res) => {
      alert("Upadate succesfully");
      console.log(res);
    });
  };
  const deleteDataRelative = () => {
    var id = "6225b5b7bcecb1724d3555c2";

    axios.delete("http://localhost:2000/userrelative" + id).then((res) => {
      console.log(res);
    });
  };
  const putDataRelative = () => {
    var id = "6225b5b7bcecb1724d3555c2";

    axios.put("http://localhost:2000/userrelative" + id).then((res) => {
      console.log(res);
    });
  };
  

  return(

    <div>
    
    // Relatives //
      <br></br>
      <button onClick={getDataRelative}>GetData Relative </button>
      <br></br>
      <button onClick={postDataRelative}>postData Relative </button>
      <br></br>
      <button onClick={deleteDataRelative}>deleteData Relative </button>
      <br></br>
      <button onClick={putDataRelative}>UpadateData Relative </button>
      <br></br>


    </div>
  )
}