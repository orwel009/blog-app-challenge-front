import React, { useState } from 'react'
import Navbar from '../Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
    const [data, getData] = useState(
        {
            "title": "",
            "content": ""
        }
    )

    const inputHandler = (event) => {
        getData({ ...data, [event.target.name]: event.target.value })
    }

    let navigate = useNavigate()
    const readValue = () => {
        if (!data.title || !data.content) {
            alert("Please fill both field")
        }
        else {
            const token = sessionStorage.getItem('token')
            axios.post("http://localhost:8080/addBlog",
                data,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'token': `${token}`
                    }
                }

            ).then(
                (response) => {
                    if (response.data.status === "success") {
                        alert("New Blog Added")
                        navigate("/my-blog")
                    } else {
                        alert(response.data.status)
                        navigate("/")
                    }
                }
            ).catch(
                (error) => {
                    alert(error.message)
                }
            )
        }
    }

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <input type="text" className="form-control" placeholder='Enter Blog Title...' name='title' value={data.title} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <textarea id="" className="form-control" placeholder='Enter Blog Content...' name='content' value={data.content} onChange={inputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <button className="btn btn-success" onClick={readValue}>AddBlog</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddBlog