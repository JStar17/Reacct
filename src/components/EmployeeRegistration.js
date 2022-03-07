import React, { useState } from 'react'



export const EmployeeRegistration =() => {

const [employeeName, setemployeeName] = useState('')
const [ employeeEmail, setemployeeEmail] = useState('')
const [ employeePassword, setemployeePassword] = useState('')
const  [ employeeAge, setemployeeAge] = useState('')

const employeeNameHandler =(e)=>{

    setemployeeName(e.target.value)
    console.log(e.target.value)
}
const employeeEmailHandler =(e)=>{

    setemployeeEmail(e.target.value)
    console.log(e.target.value)


}
const employeePasswordHandler =(e)=>{

    setemployeePassword(e.target.value)
    console.log(e.target.value)


}
const employeeAgeHandler =(e)=>{
    setemployeeAge(e.target.value)
    console.log(e.target.value)
}

const submit = (e)=>{

    e.preventDefault()
    alert(`Name: ${employeeName} \nEmail: ${employeeEmail} \nPassword: ${employeePassword} \n Age: ${employeeAge}`) 

}



return (
  <div>
        <h1> EmployeeRegistration</h1>
        <form onSubmit = {submit}>
        <table>
            <tr>
                <td>Employee Name</td>
                <td><input type = "text" name = "employeename" placeholder='enter your name'
                onChange={(e)=>{employeeNameHandler(e)}}></input></td>
            </tr>
            <tr>
            <td>Employee Email</td>
                <td><input type = "text" name = "employeeemail" placeholder='enter your email'
                onChange={(e)=>{employeeEmailHandler(e)}}></input></td>
             </tr>
             <tr>
            <td>Employee Password</td>
                <td><input type = "text" name = "employeepassword" placeholder='enter your password'
                onChange={(e)=>{employeePasswordHandler(e)}}></input></td>
             </tr>
             <tr>
            <td>Employee Age</td>
                <td><input type = "text" name = "employeeeage" placeholder='enter your Age'
                onChange={(e)=>{employeeAgeHandler(e)}}></input></td>
             </tr>
             <tr>
                 <button type="submit">Submit</button>
             </tr>

            </table> 
        </form>
</div>
)}