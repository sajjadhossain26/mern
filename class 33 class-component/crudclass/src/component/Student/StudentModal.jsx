import React, { Component } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import axios from 'axios'

export class StudentModal extends Component {
    constructor(props){
        super(props);
        this.state={
          inputs:{
            name: '',
            cell: '',
            photo:''
          }
        }
        
    }
  
  render() {
      const {show, handleModalHide,type}=this.props
      const{name, cell, photo}=this.state.inputs
      const handleStudentDataForm =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:5050/students',this.state.inputs).then(res=>{
          this.setState((prevState)=>({
            ...prevState,
            inputs: {
               name: '',
            cell: '',
            photo:''
            }
          }))
          handleModalHide()
        })
      }
         if(type==="create"){
  return (
     <Modal show={show} onHide={handleModalHide} centered>
         <Modal.Body>
           <h3>Add new student</h3>
           <hr></hr>
           <Form onSubmit={handleStudentDataForm}>
             <Form.Group className='my-3'>
               <Form.Label>Student name</Form.Label>
               <Form.Control type='text' value={name} onChange={e=> this.setState((ageVal)=>({
                 
                 ...ageVal,
                 inputs:{
                   ...ageVal.inputs,
                   name: e.target.value
                 }
               
               }))}/>
             </Form.Group>
              <Form.Group className='my-3'>
               <Form.Label>Cell</Form.Label>
               <Form.Control type='text' value={cell} onChange={e=> this.setState((preValue)=>({
                 ...preValue,
                 inputs: {
                   ...preValue.inputs,
                   cell: e.target.value
                 }
               }))}/>
             </Form.Group>
              <Form.Group className='my-3'>
               <Form.Label>Photo</Form.Label>
               <Form.Control type='text' value={photo} onChange={e=> this.setState((preValue)=>({
                 ...preValue,
                 inputs: {
                   ...preValue.inputs,
                   photo: e.target.value
                 }
               }))}/>
             </Form.Group>
              <Form.Group className='my-3'>
                <Button type='submit' variant='primary'>ADD</Button>
             </Form.Group>
           </Form>
         </Modal.Body>
     </Modal>
    )
      }else if(type==="show"){
         return (
     <Modal show={show} onHide={handleModalHide} centered>
         <Modal.Body>
           <h3>View Student data</h3>
           <hr></hr>
    
         </Modal.Body>
     </Modal>
    )
      }else if(type==="edit"){
         return (
     <Modal show={show} onHide={handleModalHide} centered>
         <Modal.Body>
           <h3>Edit Student data</h3>
           <hr></hr>
         
         </Modal.Body>
     </Modal>
    )
      }else if(type==="delete"){
         return (
     <Modal show={show} onHide={handleModalHide} centered>
         <Modal.Body>
           <h3>Are you sure?</h3>
           <hr></hr>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores omnis ad blanditiis placeat corrupti facilis laboriosam quisquam eos aliquid illo.</p>
           <div className="btn">
             <Button variant='primary'>Cancel</Button>&nbsp;
             <Button variant='danger'>Delete</Button>
           </div>
         
         </Modal.Body>
     </Modal>
    )
      }
  }
}

export default StudentModal