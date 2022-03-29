import React, { useEffect } from 'react'

export const LogOut = () => {
  useEffect(( )=> {
    localStorage.removeItem('email')
    localStorage.removeItem('password')

  },[])
 
  return (
    <div>
   <h1>LogOut</h1>
    </div>
  )
}
