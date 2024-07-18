import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()
    useEffect(()=>{
      sessionStorage.removeItem('token')
        navigate('/')
    },[navigate])

  return (
    <div>Loging out...</div>
  )
}

export default Logout