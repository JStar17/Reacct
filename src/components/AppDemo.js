import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export const AppDemo =() => {

    const [FirstName, setFirstName] = useState('')
    const [Email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const firstNameHandler =(e) =>{
        setFirstName(e.target.value) 
    }
    const emailHandler =(e) =>{
        setemail(e.target.value) 
    }
    const passwordHandler =(e) =>{
        setpassword(e.target.value) 
    }
    const submit =(e)=>{
        e.preventDefault()
        //alert(`Name: ${employeeName} \nEmail: ${employeeemail} \nPassword : ${employeepassword} \nAge ${employeeAge}`)
        //console.log(${firstName} ${email} ${password})
        var data = {
            userName:UserName,
            email :Email,
            mobileNo:MobileNumber,
            password:password,        
            firstName :FirstName,
            lastName:LastName,
            gender:Gender,
            dateOfBirth:DateOfBirth,
            role:Role,
            salary:Salary,
            address:Address
        }
        axios.post('http://localhost:2000/users',data).then(res=>{
            console.log(res.data)
        })
    }

    const post =() =>{
        var data = {
            userName:UserName,
            email :Email,
            mobileNo:MobileNumber,
            password:password,        
            firstName :FirstName,
             lastName:LastName,
            gender:Gender,
            dateOfBirth:DateOfBirth,
            role:Role,
            salary:Salary,
            address:Address

        }
        axios.post('http://localhost:2000/users',data).then(res=>{
            console.log(res.data)
        })
    }
  return (
    <div>
        <form onSubmit={submit}>
            <input type="text" name="firstName" placeholder='Enter First Name' onChange={(e)=>{firstNameHandler(e)}} />
            <input type="text" name="email" placeholder='Enter Email' onChange={(e)=>{emailHandler(e)}}/>
            <input type="password" name='password' placeholder='Enter Password' onChange={(e)=>{passwordHandler(e)}} />

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}
