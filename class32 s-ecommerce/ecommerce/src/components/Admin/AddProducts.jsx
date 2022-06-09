import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const AddProducts = ({tag, cats}) => {
     //  make slug
    const slugmake=(data)=>{
        let arr= data.split(' ');
        return arr.join('-').toLowerCase()
    }
//  get form value

  const [inputProducts, setInputProducts]=useState({
      name: '',
      slug: '',
      regular_price: '',
      sale_price: '',
      description: '',
      rating: '',
      tagId: '',
      categoryId: '',
      photo: ''
  })

  const handleproductform=(e)=>{
e.preventDefault();

axios.post('http://localhost:5050/products', {
    
      name:inputProducts.name,
      slug: slugmake(inputProducts.name),
      regular_price:inputProducts.regular_price,
      sale_price: inputProducts.sale_price,
      description: inputProducts.description,
      rating: inputProducts.rating,
      tagId: inputProducts.tagId,
      categoryId: inputProducts.categoryId,
      photo: inputProducts.photo,

}).then(res=>{
     setInputProducts({
      name: '',
      slug: '',
      regular_price: '',
      sale_price: '',
      description: '',
      rating: '',
      tagId: '',
      categoryId: '',
      photo: ''
     })
})
  }
  
//  console.log(inputProducts)

  return (
    <>
    <h1>Add new Product</h1>
     <Link to="/admin/products" className='btn btn-sm btn-primary'>All Products</Link>
    <hr />

    <Form onSubmit={handleproductform}>
        <Form.Group className='my-2'>
            <Form.Label>Product Name</Form.Label>
            <Form.Control type='text' value={inputProducts.name} onChange={e=>setInputProducts({...inputProducts, name:e.target.value})}></Form.Control>
        </Form.Group>
   
          <Form.Group className='my-2'>
            <Form.Label>Regular Price</Form.Label>
            <Form.Control type='text' value={inputProducts.regular_price} onChange={e=>setInputProducts({...inputProducts, regular_price:e.target.value})}></Form.Control>
        </Form.Group>
          <Form.Group className='my-2'>
            <Form.Label>Sale Price</Form.Label>
            <Form.Control type='text' value={inputProducts.sale_price} onChange={e=>setInputProducts({...inputProducts, sale_price:e.target.value})}></Form.Control>
        </Form.Group>
          <Form.Group className='my-2'>
            <Form.Label>Product Review</Form.Label>
            <Form.Control type='text' value={inputProducts.rating} onChange={e=>setInputProducts({...inputProducts, rating:e.target.value})}></Form.Control>
        </Form.Group>
          <Form.Group className='my-2'>
            <Form.Label>Short Description</Form.Label>
            <textarea className='form-control' onChange={e=>setInputProducts({...inputProducts, description:e.target.value})}>{inputProducts.description}</textarea>
        </Form.Group>
          <Form.Group className='my-2'>
            <Form.Label>Product Photo</Form.Label>
            <Form.Control type='text' value={inputProducts.photo} onChange={e=>setInputProducts({...inputProducts, photo:e.target.value})}></Form.Control>
        </Form.Group>
           <Form.Group className='my-2'>
            <Form.Label>Product Category</Form.Label>
            <select className='form-control' value={inputProducts.categoryId} onChange={e=>setInputProducts({...inputProducts, categoryId:e.target.value})}>
                <option value="">--Select--</option>
                {
                    cats.map(data=>
                <option value={data.id}>{data.name}</option>
                 )
                }    
            </select>
        </Form.Group>
         <Form.Group className='my-2'>
            <Form.Label>Product tags</Form.Label>
            <select className='form-control'value={inputProducts.tagId} onChange={e=>setInputProducts({...inputProducts, tagId:e.target.value})}>
                <option value="">--Select--</option>
                {
                    tag.map(data=>
                <option value={data.id}>{data.tag}</option>
                 )
                }    
            </select>
        </Form.Group>
        &nbsp;
         <Form.Group>
            <Button type='submit' variant='primary'>ADD PRODUCT</Button> 
        </Form.Group>
    </Form>
   </>
  )
}

export default AddProducts