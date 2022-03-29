import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export const ApiDemo3 = () => {
    const [userList, setuserList] = useState([])
    

    const getData = () => {
        axios.get("http://localhost:2000/users").then(res => {
            console.log(res.data.data)
            setuserList(res.data.data)
        })

    }
    useEffect(() => {
        getData()
    }, [])
    
    // console.log("userList",userList)



    return (
        <div className="container">
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First_name</th>
                        <th scope="col">Last_name</th>
                        <th scope="col">email</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {

                        userList.map((user,index) => {

                            return (
                                <tr>
                                    <td scope="row">{index+1}</td>
                                    {/* <td scope="row">{user._id}</td> */}
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    
                                    <td>
                                        <Link  to={`/delete/${user._id}`} className = "btn btn-danger">DELETE</Link>
                                        <Link  to={`/update/${user._id}`} className  = "btn btn-primary">UPDATE</Link>
                                    </td>
                                    
                                </tr>
                            )
                        })


                    }

                </tbody>
            </table>

        </div>
    )
}