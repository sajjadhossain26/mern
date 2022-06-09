import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Tag = () => {
  // show all tag
  const [tag, setTag]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:5050/tag").then(res=>{
      setTag(res.data)
    },[tag]);
  })

  // delete tag
  const handleDelete=(id)=>{
    axios.delete('http://localhost:5050/tag/'+ id)
  }
  // state for edit tag
  const [tags, setTags]=useState({
    tag: '',
    id: ''
  });
  // edit tag
  const handleEdit=(id)=>{
    setTagUpdate(true)
    axios.get('http://localhost:5050/tag/'+ id).then(res=>{
      setTags({
        tag: res.data.tag,
        id: res.data.id
      })
    })
  }
      //  make slug
    const slugmake=(data)=>{
        let arr= data.split(' ');
        return arr.join('-').toLowerCase()
    }
  // tag update form state
  const [tagUpdate, setTagUpdate]=useState(false)
  // handle edit update form
  const handleEditUpdate=(e)=>{

   e.preventDefault();
   axios.patch("http://localhost:5050/tag/"+ tags.id,{
    tag: tags.tag,
    id: tags.id,
    slug: slugmake(tags.tag)

   }).then(res=>{
     setTagUpdate(false)
   })
  }
  return (
   
    <>
    <h1>Tag</h1>
     <Link to="/admin/add-tag" className='btn btn-sm btn-info'>Add New Tag</Link>
    <hr />
    <Table className='table'>
     <thead>
       <tr>
         <th>#</th>
         <th>Name</th>
         <th>Slug</th>
         <th>Action</th>
       </tr>
     </thead>
     <tbody>
       {
       tag.map((data,index)=>
           <tr>
         <td>{index+1}</td>
         <td>{data.tag}</td>
         <td>{data.slug}</td>
         <td>
          <Button variant='btn btn-info' onClick={()=> handleEdit(data.id)} className='btn-sm'>Edit</Button>
          <Button variant='btn btn-danger' onClick={()=> handleDelete(data.id)} className='btn-sm'>Delete</Button>

         </td>
       </tr>
       )
       
       
       
       
       }
      
     </tbody>
    </Table>
    {
      tagUpdate && 
      <>
          <Form onSubmit={handleEditUpdate}>
        <Form.Group className='my-3'>
          <input className='form-control' value={tags.tag} onChange={e=> setTags({...tags, tag: e.target.value})} type="text" placeholder='Tag name' />
        </Form.Group>
      
        <br/>
         <Form.Group className='my-3'>
          <Button type="submit" variant='info'>Update</Button>
        </Form.Group>
    </Form>
      </>
    }
 
    </>
  )
}

export default Tag