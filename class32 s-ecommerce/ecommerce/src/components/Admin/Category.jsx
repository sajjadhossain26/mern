import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'

const Category = ({cats}) => {
     //  make slug
    const slugmake=(data)=>{
        let arr= data.split(' ');
        return arr.join('-').toLowerCase()
    }


  // Add category form show state
  const [showCategory, setShowCategory]=useState(false);
  // edit category
  const [editCategory, setEditCategory]=useState(false);
  // category form show 
  const handleCategoryFrom= ()=>{
    setShowCategory(true)
    setEditCategory(false)
    setCat({
      id: '',
      name: ''
    })

  }
  
  // delete category
const handleCatDelete=(id)=>{
  axios.delete("http://localhost:5050/category/" + id)
}
  // get form value state
  const [cat, setCat]=useState({
    id: '',
    name: ''
  })

  // form submit 
  const handleCatFrom=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:5050/category',{
      id: cat.id,
      name: cat.name,
      slug: slugmake(cat.name)
    }).then(res=>{
    setShowCategory(false)
      setCat({
        id: '',
        name: ''
      })
    })
  }


  // update from 
  const handleUpdateFrom=(e)=>{
    e.preventDefault();
   axios.patch("http://localhost:5050/category/"+ cat.id,{
      
     name: cat.name,
     slug: slugmake(cat.name)
 
   }).then(res=>{
     setCat({
       name: '',
       id: ''
     })
     setEditCategory(false);
   }).then(error=>console.log("error"))
    
  }
//  edit form 
  const handleEdit=(id)=>{
    setEditCategory(true);
    setShowCategory(false)
    axios.get("http://localhost:5050/category/" +id).then(res=>{
      setCat({
        name: res.data.name,
        id: res.data.id,
      
      })
    })
  }

  return (
    <>
    <h1>Category</h1>
     <Button className='btn btn-sm' onClick={handleCategoryFrom}>Add New Category</Button>
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
        cats.map((data,index)=>
         <tr>
         <td>{index+1}</td>
         <td>{data.name}</td>
         <td>{data.slug}</td>
         <td>
          <Button variant='btn btn-info' className='btn-sm' onClick={e=>handleEdit(data.id)}>Edit</Button>
          <Button variant='btn btn-danger' onClick={e=>handleCatDelete(data.id)} className='btn-sm' >Delete</Button>

         </td>
       </tr>
        
        
        
        )
      }
     </tbody>
    </Table>
    
     {
      showCategory&& 
         <>
       <h2>Category form</h2>

        <Form onSubmit={handleCatFrom}>
        <Form.Group className='my-3'>
          <input className='form-control' type="text" placeholder='Category name' value={cat.name} onChange={e=> setCat({...cat, name:e.target.value})} />
        </Form.Group>
        
        <br/>
         <Form.Group className='my-3'>
          <Button type="submit" variant='info'>ADD</Button>
        </Form.Group>
    </Form>
     </>
    }

     {
      editCategory&& 
     <>
       <h2>Edit form</h2>

        <Form onSubmit={handleUpdateFrom}>
        <Form.Group className='my-3'>
          <input className='form-control' type="text" placeholder='Edit name' value={cat.name} onChange={e=> setCat({...cat, name:e.target.value})} />
        </Form.Group>
        
        <br/>
         <Form.Group className='my-3'>
          <Button type="submit" variant='info'>ADD</Button>
        </Form.Group>
    </Form>
     </>
    }
   </>
  )
}

export default Category