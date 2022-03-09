import React from "react";
import axios from "axios";

export const RelationApi = () => {
    // Relations //

  const getDataRelation = () => {
    axios.get("http://localhost:2000/relations").then((res) => {
      console.log("called//....");
      console.log(res.data.data);
    });
  };
  const postDataRelation = () => {
    var data = {
      firstName: "manav",
      lastName: "parmar",
      userName: "j",
      password: "jay@123",
    };

    axios.post("http://localhost:2000/relations", data).then((res) => {
      alert("Upadate succesfully");
      console.log(res);
    });
  };
  const deleteDataRelation = () => {
    var id = "6225b5b7bcecb1724d3555c2";

    axios.delete("http://localhost:2000/relations" + id).then((res) => {
      console.log(res);
    });
  };
  const putDataRelation = () => {
    var id = "6225b5b7bcecb1724d3555c2";

    axios.put("http://localhost:2000/relations" + id).then((res) => {
      console.log(res);
    });
  };

  return (
<div>
// Relations //
      <br></br>
      <button onClick={getDataRelation}>GetData Relations </button>
      <br></br>
      <button onClick={postDataRelation}>postData Relations </button>
      <br></br>
      <button onClick={deleteDataRelation}>deleteData Relations</button>
      <br></br>
      <button onClick={putDataRelation}>UpadateData Relations </button>
      <br></br>



</div>


  )
}