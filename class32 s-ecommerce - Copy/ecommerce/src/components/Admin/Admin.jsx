import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'
import "./Admin.css"
const Admin = () => {
  return (
   <>
   <section className="admin">
      <Container>
          <Row>
              <Col md={3}>
                 <ul className="list-group">
                    <li className="list-group-item"><Link to="/admin/dashboard">Dashboard</Link></li>
                    <li className="list-group-item"><Link to="/admin/products">Products</Link></li>
                    <li className="list-group-item"><Link to="/admin/category">Category</Link></li>
                    <li className="list-group-item"><Link to="/admin/tag">Tag</Link></li>
                    <li className="list-group-item"><a href='#'>Log Out</a></li>
                 </ul>
              </Col>
              <Col md={9}>
                  <Outlet/>
              </Col>
          </Row>
      </Container>
   </section>
   
   </>
  )
}

export default Admin