import React from 'react'
import phyton from './coursesassets/python (1).jpg'
import mern from './coursesassets/full-stack-dev.webp'
import uiux from './coursesassets/UI ux.jpg'
import react from './coursesassets/react js training banner.webp'
import node from './coursesassets/nodejs.webp'
import webdesign from './coursesassets/web design.webp'
import ui from './coursesassets/ui.webp'



const AddCourses = () => {
  return (
    <div>
     
      
      
    
<div className='container p-5'>
  <h1 className='text-decoration-underline'>Add New Courses</h1>
  <div className='course'>
  <div className="row">
  <div className=" col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3">
    <div className="card">
      <div className='animateimg'>
        <img src={phyton} className='w-100' alt="..."/>
        </div>
      <div className="card-body">
        <h4 className='card-title'> Python</h4>
      
    </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3">
    <div className="card">
      <div className='animateimg'>
        <img src={mern} className='w-100' alt="..."/>
        </div>
      <div className="card-body">
        <h4 className='card-title'>Mern Fullstack</h4>
      
    </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3">
    <div className="card">
      <div className='animateimg'>
        <img src={uiux} className='w-100' alt="..."/>
        </div>
      <div className="card-body">
        <h4 className='card-title'>UI UX Developer</h4>
      
    </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3">
    <div className="card">
      <div className='animateimg'>
        <img src={react} className='w-100' alt="..."/>
        </div>
      <div className="card-body">
        <h4 className='card-title'>React</h4>
      
    </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3">
    <div className="card">
      <div className='animateimg'>
        <img src={node} className='w-100' alt="..."/>
        </div>
      <div className="card-body">
        <h4 className='card-title'>Nodejs</h4>
      
    </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3">
    <div className="card">
      <div className='animateimg'>
        <img src={webdesign} className='w-100' alt="..."/>
        </div>
      <div className="card-body">
        <h4 className='card-title'> webdesign</h4>
      
    </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3">
    <div className="card">
      <div className='animateimg'>
        <img src={ui} className='w-100' alt="..."/>
        </div>
      <div className="card-body">
        <h4 className='card-title'> Ui</h4>
      
    </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3">
    <div className="card">
      <div className='animateimg'>
        <img src={phyton} className='w-100' alt="..."/>
        </div>
      <div className="card-body">
        <h4 className='card-title'> Python</h4>
      
    </div>
      </div>
    </div>
    </div>
    </div>

   
</div>
</div>
  )
}

export default AddCourses