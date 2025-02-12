import React from 'react'
import slide1 from './carouselSlides/slide1.jpg'
import slide2 from './carouselSlides/slide2.jpg'
import slide3 from './carouselSlides/slide3.jpg'
import { NavLink } from 'react-router-dom'
import phyton from './coursesassets/python (1).jpg'
import mern from './coursesassets/full-stack-dev.webp'
import uiux from './coursesassets/UI ux.jpg'
import react from './coursesassets/react js training banner.webp'
import node from './coursesassets/nodejs.webp'
import webdesign from './coursesassets/web design.webp'
import ui from './coursesassets/ui.webp'


const Home = () => {
  return (
    <div >
    
      <div id="carouselExampleIndicators" className="carousel slide container p-2 rounded-4">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner rounded-4">
    <div className="carousel-item active">
      <img src={slide1} className="d-block w-100" alt="slide1"/>
    </div>
    <div className="carousel-item">
      <img src={slide2} className="d-block w-100" alt="slide2"/>
    </div>
    <div className="carousel-item">
      <img src={slide3}className="d-block w-100" alt="slide3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  
</div>
<div className='scrolling'>
  <marquee className="w-100 direction=left fw-bold" ><h1 className='scroll'>WELCOME TO THE ELEARN INFOTECH</h1></marquee>
  </div>

<div className='p-5 text-center background m-2 rounded-3'>
  <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0 border-left-2">
   <h5 className='fw-bold text-decoration-underline '>WELCOME TO THE ELEARN INFOTECH</h5>
        <p className="card-text fw-medium">ELearn Infotech is a Realtime Training Company offering Courses on varied IT Technologies like Fullstack Development, Python, React JS, Node JS, Web Design
           & PHP with MySQL, Digital Marketing, Java, UI/UX Designing & Development, Oracle Modules, Angularjs, SAP Modules, Cloud Computing, Graphic Designing etc. Established in 2016 ELearn Infotech 
           has successfully Trained upwards of 45,000+ Students. ELearn Infotech offers Excellent Software courses with end to end support to the candidates. ELearn Infotech is a one stop shop for IT services
            & Training in Hyderabad, India ELearn Infotech offers Excellent Software courses with end to end support to the
            </p>
        
        <NavLink className="nav-link" to="/courses"><button type="button" className="btn btn-primary">Our Courses</button></NavLink>  
            
      
    
  </div>
  <div className='col-sm-6 mb-3 mb-sm-0'>
     <h5 className="card-title fw-bold text-decoration-underline">Why Choose Us <span className='text-danger'>?</span></h5>
        <p className=" text-center"> . Quality of Training as per International Standards.</p>
         <p className="text-center"> . Real time Training with Realtime Projects.</p>
         <p  className="text-center">. Students satisfaction is the ultimate goal for us.</p>
         <p  className="text-center">. Business ethics is more important than money.</p>
         <p  className="text-center">. Help students to reach their true potential with Personality Development.</p>
         <p className="text-center"> . Help students to become entrepreneurs with motivation and support.</p>
         
        <NavLink className="nav-link" to="/courses"><button type="button" className="btn btn-primary">Our Courses</button></NavLink> 
        

     
   
  </div>
</div>
</div >

<div className=' p-5  cover'>
  <h1 className='text-decoration-underline fw-bold'>Our Courses</h1>
  <div className='course'>
  <div className="row">
  <div className=" col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3">
    <div className="card rounded-4">
      <div className='animateimg rounded-4'>
        <img src={phyton} className='w-100' alt="..."/>
        </div>
      <div className="card-body">
        <h4 className='card-title'> Python</h4>
      
    </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3">
    <div className="card rounded-4">
      <div className='animateimg rounded-4'>
        <img src={mern} className='w-100' alt="..."/>
        </div>
      <div className="card-body">
        <h4 className='card-title'>Mern Fullstack</h4>
      
    </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3">
    <div className="card rounded-4">
      <div className='animateimg rounded-4'>
        <img src={uiux} className='w-100' alt="..."/>
        </div>
      <div className="card-body">
        <h4 className='card-title'>UI UX Developer</h4>
      
    </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3">
    <div className="card rounded-4">
      <div className='animateimg rounded-4'>
        <img src={react} className='w-100' alt="..."/>
        </div>
      <div className="card-body">
        <h4 className='card-title'>React</h4>
      
    </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3">
    <div className="card rounded-4">
      <div className='animateimg rounded-4'>
        <img src={node} className='w-100' alt="..."/>
        </div>
      <div className="card-body">
        <h4 className='card-title'>Nodejs</h4>
      
    </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3">
    <div className="card rounded-4">
      <div className='animateimg rounded-4'>
        <img src={webdesign} className='w-100' alt="..."/>
        </div>
      <div className="card-body">
        <h4 className='card-title'> webdesign</h4>
      
    </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3">
    <div className="card rounded-4">
      <div className='animateimg rounded-4'>
        <img src={ui} className='w-100' alt="..."/>
        </div>
      <div className="card-body">
        <h4 className='card-title'> Ui</h4>
      
    </div>
      </div>
    </div>
    <div className="col-12 col-sm-12 col-mb-6 col-lg-4 col-xl-3">
    <div className="card rounded-4">
      <div className='animateimg rounded-4'>
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

<div className="container-fluid text-center bg-primary p-5 text-center">
  <div className="row">
    <div className="col">
      <h5 className='fw-bold text-white text-decoration-underline'>.ELearn Infotech</h5>
      <p className=' text-white text-start'>ELearn Infotech offers an excellent Software courses training with end to end support to the candidates.
         We offer Web Designing & Development, Digital Markeing, Oracle, SAP, Cloud Modules.</p>
    </div>
    <div className="col">
     <h5 className='fw-bold text-white text-decoration-underline'>.Quick Links</h5>
     <p className='text-white'>
     <NavLink className="nav-link" to="/batches">Batches</NavLink>
     </p>
     <p className='text-white'>
     <NavLink className="nav-link" to="/contactus">CountactUs</NavLink>
     </p>
     <p className='text-white'>
     <NavLink className="nav-link" to="/courses">Our Courses</NavLink>
     </p>
     <p className='text-white'>
     <NavLink className="nav-link" to="/aboutus">AboutUs</NavLink>
     </p>
    </div>
    <div className="col">
      <h5 className='fw-bold text-white text-decoration-underline'>Reach Us</h5>
      <p className='text-white text-start bi bi-arrow-right-short' >Plot Number 40, Second Floor,</p>

      <p className='text-white text-start bi bi-arrow-right-short' >Vittal Rao Nagar,</p>

      <p className='text-white text-start bi bi-arrow-right-short' >Madhapur, Hyderabad,</p>

      <p className='text-white text-start bi-arrow-right-short' >Telangana 500081</p>
    </div>
    <div className="col">
      <h5>
    <NavLink className="nav-link fw-bold text-white text-decoration-underline" to="/contactus">CountactUs</NavLink></h5>
    <p className="bi bi-telephone-inbound-fill">+91 8464025086</p>
    <p className="bi bi-envelope-at-fill">info[@]elearninfotech[.]com</p>
     </div>
  </div>
</div>
  
  


</div>

  )
}

export default Home