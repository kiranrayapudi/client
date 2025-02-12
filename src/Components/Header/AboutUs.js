import React from 'react'
import { NavLink } from 'react-router-dom'


const AboutUs = () => {
  return (
    <div className='about'>
      <div className='bg p-5 '>
        <h3 className='text-dark fw-bold '>AboutUs</h3>
      
      </div>
      
     <div className='container p-5'>
        <p className='fw-medium'>ELearn Infotech is a Professional Software Courses Training Company like Python, Fullstack development, React Js, Node Js, UI Development, UI/UX Designing, Web designing, PHP with MySQL, Graphic Designing, Cloud Modules, SAP Modules etc. We Provide Training for Design Unique websites & Develop Web Application, Digital Marketing Solutions like SEO, SMM, PPC (Google Ads) and help businesses create their brand. ELearn Infotech built a Relationship with students, who allows us to build up a tailored branding plan advance. ELearn Infotech offers Excellent Software Courses with end to end support to the candidates.

</p>
      </div>
      <div className='container p-5'>
     <h5 className="fw-bold text-decoration-underline">Why Choose Us <span className='text-danger'>?</span></h5>
        <p className=" fw-medium text-start bi bi-arrow-right-circle-fill">  Quality of Training as per International Standards.</p>
         <p className="fw-medium text-start bi bi-arrow-right-circle-fill">  Real time Training with Realtime Projects.</p>
         <p className="fw-medium text-start bi bi-arrow-right-circle-fill"> Students satisfaction is the ultimate goal for us.</p>
         <p className="fw-medium text-start bi bi-arrow-right-circle-fill"> Business ethics is more important than money.</p>
         <p className="fw-medium text-start bi bi-arrow-right-circle-fill">Help students to reach their true potential with Personality Development.</p>
         <p className="fw-medium text-start bi bi-arrow-right-circle-fill">Help students to become entrepreneurs with motivation and support.</p>
       

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

export default AboutUs