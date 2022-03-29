import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Update = () => {
    const userId = useParams().userId
    const [firstname, setfirstname] = useState('')
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState('')
    const [user, setuser] = useState([])

    const getusers = () =>{
        axios.get(`http://localhost:2000/users/${userId}`).then(res=>{
            console.log(res.data.data)
            setuser(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect(() => {
      getusers()
    }, [])
    
    const firstnameHandler = (e) =>{
        setfirstname(e.target.value)
    }
    const lastnameHandler = (e) => {
        setlastname(e.target.value)
    }
    const emailHandler = (e) =>{
        setemail(e.target.value)
    }
   
    const submitHandler = (e) =>{
        e.preventDefault();
        var data = {
            userId:userId,
            firstName:firstname,
            lastName:lastname,
            email:email,
            
        }
        axios.put(`http://localhost:2000/users/${userId}`,data).then(res=>{
            console.log(res.data.data)
            console.log('User Updated!')
        }).catch(err=>{
            console.log(err)
        })
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
  <div class="form-group">
    <label for="email">Email address</label>
    <input type="email" class="form-control" name="email"aria-describedby="emailHelp" defaultValue={user.email} onChange = {(e)=>{emailHandler(e)}}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="firstname">firstName</label>
    <input type="firstname" name="firstname"class="form-control" defaultValue={user.firstname}  onChange = {(e)=>{firstnameHandler(e)}}/>
  </div>
  <div class="form-group">
    <label for="lastname">lastName</label>
    <input type="lastname" name="lastname" class="form-control" defaultValue={user.lastname}  onChange = {(e)=>{lastnameHandler(e)}}/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

