import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddBatbatchesches from '../Admin/AddBatches'
import { toast, ToastContainer } from 'react-toastify'

const ViewBatches = () => {

     const [id,setId] = useState("")
    const [BatcheType,setBatchType] =useState("")
    const [course,setcourse]= useState("")
    const [Date,setDate] = useState("")
    const [Timing,setTiming] = useState("")
    const [Duration,setDuration] = useState("")
    const [Triner,setTriner] = useState("")

  const [batches,setbatches] = useState([])

  
  useEffect(()=>{
    axios.get('https://elearnserver-1.onrender.com/batches')
    .then((res)=>setbatches(res.data))
    .catch((err)=>console.log(err))
  }
 )
 const deleteBatch = (id)=> {
  axios.delete(`https://elearnserver-1.onrender.com/batches/${id}`)
  .then(()=> toast("One Batch isDeleted"))
  .catch((err)=>console.log(err))
  
 
  }
  const Editbatch =(id)=>{
    axios.get(`https://elearnserver-1.onrender.com/batches/${id}`)
    .then((res)=>{
      setId(res.data._id)
      setBatchType(res.data.BatcheType)
      setcourse(res.data.course)
      setDate(res.data.Date)
      setDuration(res.data.Duration)
      setTiming(res.data.Timing)
      setTriner(res.data.Triner)
    })
    
  
  }
  const updatedData = {
    BatcheType,
    course,
    Date,
    Timing,
    Duration,
    Triner
};
  const Update = (e)=>{
   e.preventDefault();
   axios.put(`https://elearnserver-1.onrender.com/batches/${id}`, updatedData)
    .then(()=>{
      toast.success('Batch Updated!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
       
        });
    })
    
  }
 
return (
    <div className='container p-5'>
      <ToastContainer/>
      <h1>BatcheData</h1>
      <button className='btn btn-success my-2' data-bs-target="#addbatch" data-bs-toggle="modal">Addbatch</button>
      <div className='modal' id='addbatch'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='text-start'>AddBatch</h4>
            </div>
            <div className='modal-body'>
              <AddBatbatchesches/>
            </div>
          </div>
        </div>
      </div>
       
      <table className='table table-bordered'>
        <thead className='table-dark '>
          <tr>
            <th> BatcheType</th>
            <th> course</th>
            <th> Date</th>
            <th> Timing</th>
            <th> Duration</th>
            <th>Triner</th>
            <th>Action</th>
            
  
          </tr>
        </thead>
        <tbody>
          {batches.map((batch)=>{
             return(
              <tr key={batch.id}>
                <td>{batch.BatcheType}</td>
                <td>{batch.course}</td>
                <td>{batch.Date}</td>
                <td>{batch.Timing}</td>
                <td>{batch.Duration}</td>
                <td>{batch.Triner}</td>
                <td>
                  <button onClick={()=>deleteBatch(batch._id)}  className='btn btn-danger bi bi-trash3 me-2'></button>
                  <button onClick={()=>Editbatch(batch._id)} data-bs-target="#editbatch" data-bs-toggle="modal" className='btn btn-primary bi bi-pencil  '></button>
                
                </td>
                
              </tr>
             )
            }
            )
             }
        
        </tbody>
      </table>
      <div className='modal' id ='editbatch'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='text-start'>Edit Batch</h4>
            </div>
            <div className='modal-body'>
            <form  onSubmit={Update} >
                
                <input type='text' name='BatcheType' placeholder='BatchType'value={BatcheType} onChange={(e)=>setBatchType(e.target.value)} className='form-control mb-3' />
                <input type='text' name='course' placeholder='course'value={course} onChange={(e)=>setcourse(e.target.value)}  className='form-control mb-3' />
                <input type='date' name='Date' placeholder='Date'value={Date} onChange={(e)=>setDate(e.target.value)}  className='form-control mb-3' />
                <input type='text' name='Timing' placeholder='Timing'value={Timing} onChange={(e)=>setTiming(e.target.value)}  className='form-control mb-3' />
                <input type='text' name='Duration' placeholder='Duration'value={Duration} onChange={(e)=>setDuration(e.target.value)} className='form-control mb-3' />
                <input type='text' name='Triner' placeholder='Triner'value={Triner} onChange={(e)=>setTriner(e.target.value)} className='form-control mb-3' />
                <input type='submit' className='btn btn-success mb-3' data-bs-dismiss="modal"/>
            </form>
              
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default ViewBatches