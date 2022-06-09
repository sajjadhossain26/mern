import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Header.css"
const Header = () => {
  return (
    <section className="header-page">
        <Container>
            <Row>
                <Col md={3}>
                    <div className="logo">
                        <Link to="/"><img src="https://cdn.statically.io/img/developersajjad.me/f=auto/wp-content/uploads/2021/06/onlinelogomaker-060721-1700-4878.png" alt="" /></Link>
                    </div>
                </Col>
                <Col md={9}>
                    <div className="menu">
                        <ul>
                            <li><Link to="/">ALL DEVELOPER</Link></li>
                            <li><Link to="/admin">ADMIN</Link></li>
                            <li><Link to="/add-devs">ADD NEW DEVELOPER</Link></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Header