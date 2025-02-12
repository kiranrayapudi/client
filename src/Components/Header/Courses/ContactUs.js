import axios from 'axios';
import React, { Component } from 'react';


class ContactUs extends Component {
  constructor(props) {
    super(props)

    this.state= {

      username:"",
      mobile:"",
      email:"",
      course:"",
      message:""


    }
  
  }
  changename=(e)=>{
   this.setState({
    [e.target.name]: e.target.value
   })
   console.log(e.target.value)
  }
  submit = (e)=>{
    const{ username,mobile,email,course,message} = this.state;
    e.preventDefault();
    
    
    const nameError = document.getElementById("nameError");
    const mobileError = document.getElementById("mobileError");
    const emailError = document.getElementById("emailError");
    const courseError = document.getElementById("courseError");
    
    const Name = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    const number =/^[0-9]+$/;
    const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const Course =/^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    let namestatus = false;
    let mobilestatus = false;
    let emailstatus = false;
  
     ////Name validation//
    if (username == ""){
      nameError.innerHTML = ("Please Enter Name");
      
    }else{
      if (username.match(Name)){
        nameError.innerHTML ="";
        namestatus=true;
       
      }else{
        nameError.innerHTML = "Only Charactor"
      }
    }
    /////mobile number validation//
    if (mobile == ""){
      mobileError.innerHTML = ("Please Enter mobile number");
      
    }else{
      if (mobile.match(number)){
        if(mobile.length === 10){
          mobileError.innerHTML = "";
          mobilestatus =true;
       
        }else{
          mobileError.innerHTML = "Only 10 Digits";
        }
      }else{
        mobileError.innerHTML = "Only number";
      }
    }
    ////email
    if (email == ""){
      emailError.innerHTML = ("Please Enter Email Address");
      
    }else{
      if (email.match(mail)){
        emailError.innerHTML ="";
        emailstatus = true;
  
      }else{
        emailError.innerHTML = "Please Enter Valid email"
      }
    }
    /////course
    if (course == ""){
      courseError.innerHTML = ("Please Enter Your Course Name");
      
    }else{
      if (course.match(Course)){
        courseError.innerHTML ="";
 
      }else{
        courseError.innerHTML = "Fill the Course Name"
      }
    }

     if(namestatus && mobilestatus && emailstatus){
      axios.post("https://elearnserver-1.onrender.com/contacts",this.state)
      .then(()=>{
       alert("Thank u for Contacting we will Get Back to Soon ")
       
    this.setState=( {

      username:"",
      mobile:"",
      email:"",
      course:"",
      message:""


    })
     
    
      }
        
     
      )
    }
   
   
  }
  render() {
    const { username,mobile,email,course,message} = this.state
    return (
      <div className='contactus'>

          
          <div className='container p-2 rounded-5'>
          <div className='row'>
            <div className='col-6 border border-start-0 border-light-dark rounded-4'>
          <form onSubmit={this.submit} >
              <h2 className='text-center text-decoration-underline bi bi-person-lines-fill '> Contact US</h2>
            <input type="text" name="username" placeholder="Username" value={username} onChange={this.changename} className='form-control my-3' />
            <p id='nameError'></p>
            <input type="text" name="mobile" placeholder="mobile" value={mobile} onChange={this.changename} className='form-control my-3' />
            <p id='mobileError'></p>
            <input type="text" name="email" placeholder="email" value={email} onChange={this.changename}className='form-control my-3' />
            <p id='emailError'></p>
            <input type="text" name="course" placeholder="course" value={course} onChange={this.changename}className='form-control my-3' />
            <p id='courseError'></p>
            <textarea type="text" name="message" placeholder="message"value={message} onChange={this.changename}className='form-control my-3'textarea />
            
            <input type="submit" className=' btn btn-success mb-3 form-control'/>
          </form>
          </div>
          <div className='col-6 border border-end-0 border-light-dark rounded-4 p-5'>
            <h2 className='bi bi-geo-alt-fill text-decoration-underline'>Address</h2>
            <h5 className='m-3'> <span className='text-danger'>E</span>Learn Infotec </h5>
  
               <p className='bi bi-buildings-fill text-start border border-light-subtle border-warning rounded-4 '> Plot Number 40, Second Floor,</p>
  
               <p className='bi bi-signpost-fill text-start border border-light-subtle border-warning rounded-4 '> Vittal Rao Nagar,</p>
                
               <p className='bi bi-geo-alt-fill text-start border border-light-subtle border-warning rounded-4 '> Madhapur, Hyderabad,</p>
  
               <p className='bi bi-geo-alt-fill text-start border border-light-subtle border-warning rounded-4'> Telangana 500081</p>
               <p className="bi bi-telephone-inbound-fill">+91 8464025086</p>
                <p className="bi bi-envelope-at-fill">info[@]elearninfotech[.]com</p>
       
  
          </div>
          </div>
          </div>
          <div className='pt-2'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.324093997886!2d78.38191677414258!3d17.444195401168137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ed2dea4c17%3A0xd49a55db035ba737!2sElearn%20Infotech%20-%20MERN%20Java%20Python%20Fullstack%20%7C%20UI%20Development%20React%20JS%20%7C%20PHP%20Web%20Development%20UI%20UX%20Courses%20Training%20Hyderabad!5e0!3m2!1sen!2sin!4v1728044673528!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
    </div>
    
  )
   }
  
  }

export default ContactUs;