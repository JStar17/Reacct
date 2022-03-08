import React from "react";
import axios from "axios";

export const API = () => {
  // USER 
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
    </div>

  );
};
