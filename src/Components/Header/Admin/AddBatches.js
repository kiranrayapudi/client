import axios from 'axios'
import React, { Component } from 'react'
import { toast, ToastContainer } from 'react-toastify'

export default class AddBatbatchesches extends Component {
    constructor(props) {
        super(props)
      
        this.state ={
          BatcheType:"",
          course:"",
          Date:"",
          Timing:"",
          Duration:"",
          Triner:""
  
        }
    }
    changename = (e) =>{
        this.setState({
         [e.target.name]: e.target.value
        })
       console.log([e.target.name], e.target.value)
    }

    postBatch = (e) => {
        e.preventDefault();
       axios.post("https://elearnserver-1.onrender.com/batches",this.state)
       .then(()=>{
        toast("new batch added....")
        this.setState ( {
            BatcheType:"",
            course:"",
            Date:"",
            Timing:"",
            Duration:"",
            Triner:""
    
          })
    })
        
        }  
    
  render() {
    const { BatcheType, course, Date, Timing, Duration, Triner } = this.state
    
    return (
        <div  className='container'>
        <div className='addbatche'>
            <ToastContainer/>
            <form onSubmit={this.postBatch} >
                
                <input type='text' name='BatcheType' placeholder='BatchType'value={BatcheType} onChange={this.changename} className='form-control mb-3' />
                <input type='text' name='course' placeholder='course'value={course} onChange={this.changename} className='form-control mb-3' />
                <input type='date' name='Date' placeholder='Date'value={Date} onChange={this.changename} className='form-control mb-3' />
                <input type='text' name='Timing' placeholder='Timing'value={Timing} onChange={this.changename} className='form-control mb-3' />
                <input type='text' name='Duration' placeholder='Duration'value={Duration} onChange={this.changename} className='form-control mb-3' />
                <input type='text' name='Triner' placeholder='Triner'value={Triner} onChange={this.changename} className='form-control mb-3' />
                <input type='submit' className='btn btn-success mb-3' data-bs-dismiss="modal"/>
            </form>
        </div>
    </div>
  )
  }
}

