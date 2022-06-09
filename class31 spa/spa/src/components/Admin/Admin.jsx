import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Admin.css"

const Admin = () => {

    const [admin, setAdmin]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:5050/devs").then(res=>{
            setAdmin(res.data)
        }).catch(error=>{
            console.log("error");
        })
    },[admin])
 
  return (
    <section className="admin-page my-3">
        <Container>
            <Row>
                <Col md={8} className="m-auto">
                 <Card className='shadow'>
                     <Card.Header className='d-flex justify-content-between'>
                         <h1>Our Team Member</h1>
                         <Link to="/add-devs" className='btn btn-info'>Add New Member</Link>
                     </Card.Header>
                    <Card.Body>
                       <table className='table table-striped'>
                           <thead>
                               <tr>
                                   <th>Serial</th>
                                   <th>Name</th>
                                   <th>Skill</th>
                                   <th>Cell</th>
                                   <th>Photo</th>
                                   <th>Action</th>
                               </tr>
                           </thead>
                           <tbody>
                    
                               {
                                 admin.map((data, index)=>
                                      <tr>
                                   <td>{index+1}</td>
                                   <td>{data.name}</td>
                                   <td>{data.skill}</td>
                                   <td>{data.cell}</td>
                                   <td><img style={{width: "50px", height: "50px", objectFit: "cover"}} src={data.photo} alt="" /></td>
                                   <td>
                                     <a className='btn btn-primary btn-sm' href="#"><i class='bx bxs-show'></i></a>&nbsp;
                                     <a className='btn btn-info btn-sm' href="#"><i class='bx bxs-edit'></i></a>&nbsp;
                                     <a className='btn btn-danger btn-sm' href="#"><i class='bx bxs-trash'></i></a>

                                   </td>
                               </tr>
                                    
                                    )  
                                  
                               }
                              
                           </tbody>
                       </table>
                    </Card.Body>
                 </Card>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Admin