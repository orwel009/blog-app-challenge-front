import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const EditBlog = () => {
    const navigate = useNavigate();
    const { id: blogId } = useParams();
    const [editableFields, setEditableFields] = useState({
        _id: '',
        title: '',
        content: ''
    })
    const fetchData = () => {
        const token = sessionStorage.getItem('token')
        axios.post("http://localhost:8080/getEditBlog",
            { '_id': blogId },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${token}`
                }
            }
        ).then(
            (response) => {
                if (response.data.status === "unauthorized access") {
                    alert('Unauthorized access. Please log in.')
                    navigate('/')
                } else {
                    setEditableFields({_id:response.data._id, title: response.data.title, content: response.data.content })
                }
            }
        ).catch(
            (error) => {
                alert(error.message)
            }
        ).finally()
    }
    useEffect(() => { fetchData() }, [])
    
    const inputHandler = (event) => {
        const { name, value } = event.target;
        setEditableFields({ ...editableFields, [name]: value });
    }

    const readValue = ()=>{
        const token = sessionStorage.getItem('token')
        axios.post("http://localhost:8080/editBlog",
            editableFields,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${token}`
                }
            }
        ).then(
            (response)=>{
                if (response.data.status === "success") {
                    alert("Blog Updated Successfully")
                    navigate('/my-blog')
                } else {
                    alert(response.data.status)
                }
            }
        ).catch(
            (error)=>{
                alert(error.message)
            }
        )
    }

    return (
        <div>
            <Navbar />
            <div className="contaner">

                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Title</label>
                        <input type="text" name='title' className="form-control" value={editableFields.title} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Content</label>
                        <textarea name='content' id="" className="form-control" value={editableFields.content} onChange={inputHandler}></textarea>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-warning" onClick={()=>{readValue(editableFields._id)}}>Update</button>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default EditBlog