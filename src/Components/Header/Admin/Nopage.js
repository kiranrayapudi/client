import React from 'react'
import admin from './coursesassets/Nopage.jpg'

const Nopage = () => {
  return (
    <div>
        <div className='container'>
            <h1 >welcome to the Admin DashBoard</h1>
            <img src={admin} alt='admin'className='w-100'/>

        </div>
    </div>
  )
}

export default Nopage