import React from "react";
import axios from "axios";

export const CelebrationApi = () => {


// Celebration//

const getDataCelebration = () => {
    axios.get("http://localhost:2000/celebration").then((res) => {
      console.log("called//....");
      console.log(res.data.data);
    });
  };
  const postDataCelebration = () => {
    var data = {
      firstName: "manav",
      lastName: "parmar",
      userName: "j",
      password: "jay@123",
    };

    axios.post("http://localhost:2000/celebration", data).then((res) => {
      alert("Upadate succesfully");
      console.log(res);
    });
  };
  const deleteDataCelebration = () => {
    var id = "6225b5b7bcecb1724d3555c2";

    axios.delete("http://localhost:2000/celebration" + id).then((res) => {
      console.log(res);
    });
  };
  const putDataCelebration = () => {
    var id = "6225b5b7bcecb1724d3555c2";

    axios.put("http://localhost:2000/celebration" + id).then((res) => {
      console.log(res);
    });
  };

  return(
<div>

// Celebration //
      <br></br>
      <button onClick={getDataCelebration}>GetData Celebration </button>
      <br></br>
      <button onClick={postDataCelebration}>postData Celebration </button>
      <br></br>
      <button onClick={deleteDataCelebration}>deleteData Celebration</button>
      <br></br>
      <button onClick={putDataCelebration}>UpadateData Celebration </button>
      <br></br>


</div>

  )
}