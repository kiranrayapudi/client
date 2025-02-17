import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Batches = () => {
  const [batches,setbatches] = useState([])

  useEffect(()=>{
    axios.get('https://elearnserver-1.onrender.com/batches')
    .then((res)=>setbatches(res.data))
    .catch((err)=>console.log(err))
  })
  return (
   
    <div className='p-2 batches'>
      
      <h1 className='text-white'>Batches</h1>
      
       <div className="table-responsive">
      <table className='table table-bordered'>
        <thead className='table-dark '>
          <tr>
            <th> BatcheType</th>
            <th> course</th>
            <th> Date</th>
            <th> Timing</th>
            <th> Duration</th>
            <th>Triner</th>
            
  
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
                
              </tr>
             )
            }
            )
             }
        
        </tbody>
      </table>
       </div>
    </div>
  )
}

export default Batches
