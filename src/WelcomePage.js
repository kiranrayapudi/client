import React from 'react'
import { NavLink } from 'react-router-dom'
import img from "./Components/Header/Courses/coursesassets/theory.webp"
import img2 from "./Components/Header/Courses/coursesassets/theory 2.webp"
import img3 from "./Components/Header/Courses/coursesassets/theory3.webp"

const WelcomePage = () => {
  return (
    <div>
        <div className='welcome p-5 '>
          <div className='welcometext '>
            <h1 >Welcome to the <span className='text-danger'>E</span>learn infotech <span className='bi bi-brightness-alt-high '></span></h1>
            <p>All you need is Learn Courses from Industry Expert with ELearn</p>
            </div>
           
        </div>
        <div className='contact'>
          <button className='border-light-subtle border-warning rounded-4 bg-success text-white'>
          <NavLink className="nav-link" to="/contactus">CountactUs</NavLink>
          </button>
        </div>
        <div className='message'>
          <button className='border-light-subtle border-warning rounded-4 bg-danger text-white'>
          <NavLink className="nav-link" to="/contactus">Message Us</NavLink>
          </button>
        </div>
        <div className='container'>
          <h2 className='fw-bold text-decoration-underline' ><span className='text-danger'>E</span>learn Infotech</h2>
          <p>
          ELearn Infotech is a Realtime Training Company offering Courses on varied IT Technologies like Fullstack Development, Python, Java, React JS, Node JS, UI/UX Designing & Development, Web Design & PHP with MySQL, Digital Marketing, Oracle Modules, Angularjs, SAP Modules, Cloud Computing, Graphic Designing etc. Established in 2016 ELearn Infotech has successfully Trained upwards of 45,000+ Students. ELearn Infotech offers Excellent Software courses with end to end support to the candidates. ELearn Infotech is a one stop shop for IT services & Training in Hyderabad, India. ELearn Infotech takes all the efforts to provide flexible and friendly software training programs to all right from beginners to professionals who wish to learn new techniques and current trends.
           We offer software courses training with Real Time Projects by Industry Experts.Read More
          </p>
          <img src={img} alt='img'className='w-100'/>
          
         
        </div>
        <div className='row'>
          <div className='col-12'>
          <img src={img2} alt='img2'className='w=100'/>

          </div>
          <div className='col-12'>
          <img src={img3} alt='img3'className='w=100'/>

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

export default WelcomePage