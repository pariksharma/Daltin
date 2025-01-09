import React from 'react'
import Header from '../../components/navbar/navbar'
import Content from '../../components/content/content'
import { useNavigate } from 'react-router-dom'

const Aboutus = () => {

  const navigate = useNavigate()

  const isVerified = () => {
    const verified = localStorage.getItem('login');
    if(verified == "true") {
      return true
    }
    else {
      navigate('/')
    }
  }

  return (
    <>
    {isVerified() &&<>
        <Header />
        <div className="content-wrapper">
          <Content /> 
        </div> 
      </>
    }
    </>
  )
}

export default Aboutus