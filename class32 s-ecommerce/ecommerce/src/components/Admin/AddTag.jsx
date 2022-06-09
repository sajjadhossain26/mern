import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'


const AddTag = () => {
   
    // state for tag
     const [tag, setTag]=useState();
    //  make slug
    const slugmake=(data)=>{
        let arr= data.split(' ');
        return arr.join('-').toLowerCase()
    }
    //  add new tag
    const handleTagFrom=(e)=>{
     e.preventDefault();
     axios.post("http://localhost:5050/tag",{
         id: "",
         tag: tag,
         slug: slugmake(tag)
     }).then(res=>{
         setTag('')
     })
    }
  return (
   <>
     <h1>Tag</h1>
     <Link to="/admin/tag" className='btn btn-sm btn-primary'>All Tag</Link>
    <hr />
    <Form onSubmit={handleTagFrom}>
        <Form.Group className='my-3'>
          <input className='form-control' value={tag} onChange={e=> setTag(e.target.value)} type="text" placeholder='Tag name' />
        </Form.Group><br/>
         <Form.Group className='my-3'>
          <Button type="submit" variant='info'>Add new Tag</Button>
        </Form.Group>
    </Form>
   </>
  )
}

export default AddTag