import React, { useEffect, useState } from 'react'

export const Profile = () => {

    
    const [email,setemail] =useState('')
    const [password,setpassword] =useState('')


    useEffect  (() =>{

        setemail(localStorage.getItem('email'))
        setpassword(localStorage.getItem('password'))
        return () =>{

        }
    }
  )

return (
    <div>
{email}
{password}
    </div>
  )
}
