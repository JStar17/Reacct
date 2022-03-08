import React from "react";
import axios from "axios";

export const API = () => {


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
  

    // USERDETAILS //
    <br></br>
   
      <button onClick={getDataUserDetail}>GetData User Detail </button>
      <br></br>
      <button onClick={postDataUserDetail}>postData User Detail </button>
      <br></br>
      <button onClick={deleteDataUserDetail}>deleteData User Detail</button>
      <br></br>
      <button onClick={putDataUserDetail}>UpadateData User Detail</button>
      <br></br>

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

      
      // Relatives //
      <br></br>
   
      <button onClick={getDataRelative }>GetData Relative  </button>
      <br></br>
      <button onClick={postDataRelative }>postData Relative  </button>
      <br></br>
      <button onClick={deleteDataRelative }>deleteData Relative </button>
      <br></br>
      <button onClick={putDataRelative }>UpadateData Relative  </button>
      <br></br>

    </div>

  );
};
