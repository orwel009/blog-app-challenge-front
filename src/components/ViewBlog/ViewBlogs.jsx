import React, { useEffect, useState } from 'react'
import './ViewBlog.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar'
import { format } from 'date-fns';


const ViewBlogs = () => {
    const [blog, changeBlog] = useState([])
    const navigate = useNavigate()

    const fetchData = () => {
        const token = sessionStorage.getItem('token')
        // console.log(token)
        axios.post("http://localhost:8080/viewBlog",
            {},
            {
                headers: {
                    'Content-Type': 'application/json',
                    'token': `${token}`
                }
            }
        ).then(
            (response) => {
                if (response.data.status === 'unauthorized access') {
                    alert('Unauthorized access. Please log in.')
                    navigate('/')
                } else {
                    changeBlog(response.data)
                }
            }
        ).catch(
            (error) => {
                alert(error.message)
            }
        )
    }

    useEffect(() => { fetchData() }, [])

    const formatDate = (date) => {
        const now = new Date();
        const postedDate = new Date(date);
        const diffInMilliseconds = now - postedDate;

        // Less than a minute
        if (diffInMilliseconds < 60000) {
            return 'just now';
        }

        // Less than an hour
        if (diffInMilliseconds < 3600000) {
            const minutes = Math.floor(diffInMilliseconds / 60000);
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        }

        // Less than a day
        if (diffInMilliseconds < 86400000) {
            const hours = Math.floor(diffInMilliseconds / 3600000);
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        }

        // Less than a month
        if (diffInMilliseconds < 2592000000) { // 30 days in milliseconds
            const days = Math.floor(diffInMilliseconds / 86400000);
            return `${days} day${days > 1 ? 's' : ''} ago`;
        }

        // Less than a year
        if (diffInMilliseconds < 31536000000) { // 365 days in milliseconds
            return format(postedDate, 'MMM dd');
        }

        // More than a year
        return format(postedDate, 'dd MMM yyyy');
    };
    const sortedBlogs = blog.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {sortedBlogs.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <div className="card">
                                            <img src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{value.title}</h5>
                                                <p className="card-text">{value.content}</p>
                                                <p className="card-text">{value.author}</p>
                                                <p className="card-text">{formatDate(value.date)}</p>
                                                <Link to='' className="btn btn-primary">Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                }
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewBlogs