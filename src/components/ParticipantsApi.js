import React from "react";
import axios from "axios";

export const ParticipantsApi = () => {

    
  // Participants //

  const getDataParticipant = () => {
    axios.get("http://localhost:2000/participants").then((res) => {
      console.log("called//....");
      console.log(res.data.data);
    });
  };
  const postDataParticipant = () => {
    var data = {
      firstName: "manav",
      lastName: "parmar",
      userName: "j",
      password: "jay@123",
    };

    axios.post("http://localhost:2000/participants", data).then((res) => {
      alert("Upadate succesfully");
      console.log(res);
    });
  };
  const deleteDataParticipant = () => {
    var id = "6225b5b7bcecb1724d3555c2";

    axios.delete("http://localhost:2000/participants" + id).then((res) => {
      console.log(res);
    });
  };
  const putDataParticipant = () => {
    var id = "6225b5b7bcecb1724d3555c2";

    axios.put("http://localhost:2000/participants" + id).then((res) => {
      console.log(res);
    });
  };


return(
    <div>
     // Participants //
      <br></br>
      <button onClick={getDataParticipant}>GetData Participant </button>
      <br></br>
      <button onClick={postDataParticipant}>postData Participant </button>
      <br></br>
      <button onClick={deleteDataParticipant}>deleteData Participant</button>
      <br></br>
      <button onClick={putDataParticipant}>UpadateData Participant </button>
      <br></br>

    </div>
)
}