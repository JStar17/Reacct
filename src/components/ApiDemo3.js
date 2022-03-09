import React, { useEffect, useState } from 'react'
import axios from 'axios'


export const ApiDemo3 = () => {
    const [userList, setuserList] = useState([])
    const [productList, setproductList] = useState([])

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
                                        <button className = "btn btn-danger">DELETE</button>
                                        <button className = "btn btn-primary">UPDATE</button>
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