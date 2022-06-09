import React from 'react'
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <>
    <h1>Products</h1>
     <Link  to="/admin/add-products" className='btn btn-sm btn-primary'>Add New Products</Link>
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
       <tr>
         <td>1</td>
         <td>Alo</td>
         <td>Alo</td>
         <td>
          <Button variant='btn btn-primary' className='btn-sm'>View</Button>
          <Button variant='btn btn-info' className='btn-sm'>Edit</Button>
          <Button variant='btn btn-danger' className='btn-sm'>Delete</Button>

         </td>
       </tr>
     </tbody>
    </Table>
    </>
  )
}

export default Products;