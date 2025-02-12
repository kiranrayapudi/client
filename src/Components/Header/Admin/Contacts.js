import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Contacts = () => {
    const [contacts,setcontacts] = useState([])


   useEffect(()=>{
        axios.get("http://localhost:4000/contacts " )
        .then((res)=>setcontacts(res.data))
        .catch((err)=>console.log(err))
      }
     )


  return (
    <div className='conatiner p-2'>
        <h2 ><span className='text-danger'>C</span>ontacts Details <span className='bi bi-telephone-fill'></span> </h2>
           <table className='table table-bordered'>
           <thead className='table-dark '>
                <tr>
                    <th>Names</th>
                    <th>Mobile</th>
                    <th>Email Id's</th>
                    <th>Course</th>
                     <th>Messages</th>
                </tr>
            </thead>
            <tbody>
            {contacts.map((contact,id)=>{
             return(
              <tr key={id}>
                
                <td>{contact.username}</td>
                <td>{contact.mobile}</td>
                <td>{contact.email}</td>
                <td>{contact.course}</td>
                <td>{contact.message}</td>
               
                
                
              </tr>
             )
            }
            )
             }
        
            </tbody>
        </table>
    </div>
  )
}

export default Contacts