import React, { useState } from 'react'

export const Formvalidation = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [age, setage] = useState('')
    const [agevalidator, setagevalidator] = useState('')
    useState(true)

    var isAgeValid = true;
    const ageBlurhandler =(e) =>{
        console.log("ii",e.target.value)
        if(e.target.value.length<=0){
            setagevalidator(true)
        }
    }
    const SubmitButton=(e)=>{
        if (name && email && age){
          return <button type="button">Submit</button>
        } else {
          return <button type="button" disabled>Submit</button>
        };
      };
  return (
    <div>
        <form>
            <label>ENter name</label>
            <input type="text" name="name" onChange={(e)=>setname(e.target.value)}/>
            {
                name.length > 0 && name.length< 3 ? "pls Check len":null
            }
            <div>
            <label>ENter email</label>
            <input type="text" name="email" onChange={(e)=>setemail(e.target.value)}/>
            {
                name.length > 0 && name.length<=0 ? null:"pls Check len"
            }
            </div>
            <div>
            <label>ENter age</label>
            <input type="text" name="age" onChange={(e)=>setage(e.target.value)} onBlur ={(e)=>{ageBlurhandler(e)}}/>
            {
                agevalidator ? "pls enter age":""
            }
             </div>
             
             <SubmitButton/>

             
        </form>
    </div>
    
  )
}
