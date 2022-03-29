import React from 'react'

export const FileUpload = () => {

    const filechangeHandler = (e) => {
        console.log("file change handler function called....")
        console.log(e.target.files[0])
        
    }
    const mulFileChangeHandler = (e) => {
        console.log(e.target.files)
        }
  return (
    <div>

        <form>
        <div>
            <input type="file"  onChange ={(e=>{filechangeHandler(e)})}/>
            ('Single File')           
            </div>
            <div>
            <input type ="file" onChange ={(e=>{mulFileChangeHandler(e)})} multiple></input>
            ('Multiple File')
            </div>
        </form>
    </div>
  )
}