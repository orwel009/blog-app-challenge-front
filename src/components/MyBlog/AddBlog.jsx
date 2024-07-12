import React, { useState } from 'react'
import Navbar from '../Navbar'

const AddBlog = () => {
    const [data,getData] = useState(
        {
            "title":"",
            "content":"",
            "author":"",
            "date":""
        }
    )

    const inputHandler = (event)=>{
        getData({...data,[event.target.name]:event.target.value})
    }

    const readValue = ()=>{
        console.log(data)
    }
  
  return (
    <div>
        <Navbar/>
        
    </div>
  )
}

export default AddBlog