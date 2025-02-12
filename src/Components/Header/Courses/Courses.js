import React from 'react'
import phyton from './coursesassets/python (1).jpg'
import mern from './coursesassets/full-stack-dev.webp'
import uiux from './coursesassets/UI ux.jpg'
import react from './coursesassets/react js training banner.webp'
import node from './coursesassets/nodejs.webp'
import webdesign from './coursesassets/web design.webp'
import ui from './coursesassets/ui.webp'
import image from './coursesassets/bodyimage.jpg'


const Courses = () => {
  return (
    <div className='cover'>
      
      <div class="row container-fluid p-2 ">
            <div class="col-6">
                <h1>welcome to the IT training center hyderabad</h1>
                <p>While building any interface, you are faced with a dozen decisions every
                     minute. At the core of every high quality interface, is a set of constraints that 
                     help in creating this level of consistency and quality.Not only do constriants help in consistent features,
                         but they also make the decisions and their implementation fast.</p>
                         <p>While building any interface, you are faced with a dozen decisions every
                     minute. At the core of every high quality interface, is a set of constraints that 
                     help in creating this level of consistency and quality.Not only do constriants help in consistent features,
                         but they also make the decisions and their implementation fast.</p>
                         <p>While building any interface, you are faced with a dozen decisions every
                     minute. At the core of every high quality interface, is a set of constraints that 
                     help in creating this level of consistency and quality.Not only do constriants help in consistent features,
                         but they also make the decisions and their implementation fast.</p>

            </div>
            <div className="col-6 h-100">
            <img src={image} className='w-100 rounded-4' alt=''/>
                

            </div>

        </div>
      
    
<div className='container p-5'>
  <h1 className='text-decoration-underline'>Our Courses</h1>
  <div className='course'>
  <div className="row">
  <div className=" col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3">
    <div className="card rounded-4">
      <div className='animateimg rounded-4'>
        <img src={phyton} className='w-100' alt="..."/>
        </div>
      <div className="card-body">
        <h4 className='card-title kiran'> Python</h4>
      
    </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3 ">
    <div className="card rounded-4">
      <div className='animateimg rounded-4'>
        <img src={mern} className='w-100' alt="..."/>
        </div>
      <div className="card-body">
        <h4 className='kiran card-title'>Mern Fullstack</h4>
      
    </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3">
    <div className="card rounded-4">
      <div className='animateimg rounded-4'>
        <img src={uiux} className='w-100' alt="..."/>
        </div>
      <div className="card-body">
        <h4 className='kiran card-title'>UI UX Developer</h4>
      
    </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3">
    <div className="card rounded-4">
      <div className='animateimg rounded-4'>
        <img src={react} className='w-100' alt="..."/>
        </div>
      <div className="card-body">
        <h4 className='card-title kiran'>React</h4>
      
    </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3">
    <div className="card rounded-4">
      <div className='animateimg rounded-4'>
        <img src={node} className='w-100' alt="..."/>
        </div>
      <div className="card-body">
        <h4 className='card-title kiran'>Nodejs</h4>
      
    </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3">
    <div className="card rounded-4">
      <div className='animateimg rounded-4'>
        <img src={webdesign} className='w-100' alt="..."/>
        </div>
      <div className="card-body">
        <h4 className='card-title kiran'> webdesign</h4>
      
    </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3">
    <div className="card rounded-4">
      <div className='animateimg rounded-4'>
        <img src={ui} className='w-100' alt="..."/>
        </div>
      <div className="card-body">
        <h4 className='card-title kiran'> Ui</h4>
      
    </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3">
    <div className="card rounded-4">
      <div className='animateimg rounded-4'>
        <img src={phyton} className='w-100' alt="..."/>
        </div>
      <div className="card-body">
        <h4 className='card-title kiran'> Python</h4>
      
    </div>
      </div>
    </div>
    </div>
    </div>
    </div>

    <div className='p-5 bg-dark mb-5'>
    <h4 className='text-white'>Still Hunting for a<span className='text-warning'> Job</span> <span className='text-danger'>?</span></h4>
    <br></br>
       <p className='text-white fw-medium'>Companies are looking for you!</p>

       <p className='text-white fw-medium'>All you need is Learn Courses from Industry Expert with ELearn,</p>

        <p className='text-white fw-medium'>Become Web Designing / Web Development / Digital Marketing Professional And Get JOB with our Free Placement Assistance Program</p>

    </div>

</div>
  )
}

export default Courses