import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Header/Courses/Home'
import Courses from './Header/Courses/Courses'
import Batches from './Header/Courses/Batches'
import ContactUs from './Header/Courses/ContactUs'
import AboutUs from './Header/AboutUs'
import Admin from './Header/Admin/Login'
import Admindasboard from './Header/Admin/Admindasboard'
import AddBatches from './Header/Admin/AddBatches'
import ViewBatches from './Header/Admin/ViewBatches'
import AddCourses from './Header/Admin/AddCourses'
import VeiwCourses from './Header/Admin/VeiwCourses'
import Contacts from './Header/Admin/Contacts'
import Nopage from './Header/Admin/Nopage'
import WelcomePage from '../WelcomePage'








const Routing = () => {
  return (
    <Routes>
        <Route path='/home'element={<Home/>}/>
        <Route path='/courses'element={<Courses/>}/>
        <Route path='/batches' element={<Batches />} />
        <Route path='/contactus'element={<ContactUs/>}/>
        <Route path='/AboutUs'element={<AboutUs/>}/>
        <Route path='/admin'element={<Admin/>}/>
        <Route path='/admindashboard'element={<Admindasboard/>}/>
        <Route path='/addbatches'element={<AddBatches/>}/>
        <Route path='/viewbatches'element={<ViewBatches/>}/>
        <Route path='/addcourses' element={<AddCourses/>} />
        <Route path='./viewcourses' element={<VeiwCourses/>}/>
        <Route path='./Header/Admin/Contacts.js'element={<Contacts/>}/>
        <Route path='./Nopage' element={<Nopage/>}/>
        <Route path='*' element={<WelcomePage/>}/>


        
       
        
        
        

    </Routes>
  )
}

export default Routing