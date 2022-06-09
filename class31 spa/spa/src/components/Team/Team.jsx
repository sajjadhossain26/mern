import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Team.css";
import axios from "axios"
const Team = () => {
// all devs loader
  const [devs, setDevs]=useState([])

  useEffect(()=>{

   axios.get("http://localhost:5050/devs").then(res=>{
     setDevs(res.data)
   }).catch(error=>{
    console.log("error");
   } )
  },[devs])


  return (
    <>
      <section className="team-member">
        <Container className="my-5">
          <Row>
            <h1 className="text-center">Our Perfect Team</h1>
            
              {
                
                devs.map(data=>
                <Col md={4}>  
                <Card>
                <Card.Body>
                <div className="team">
                    <div className="team-image">
                      <img
                        src={data.photo}
                        alt=""
                      />
                    </div>
                    <div className="team-content">
                      <h4>{data.name}</h4>
                      <span>{data.skill}</span>
                      <p>
                        {data.email}
                      </p>
                      <div className="team-icon">
                        <ul>
                          <li> <a href="#"><i class="bx bxl-facebook-circle"></i></a></li> 
                          <li><a href="#"> <i class="bx bxl-instagram"></i></a></li>
                          <li><a href="#"> <i class="bx bxl-linkedin"></i></a> </li>
                        </ul>
                      </div>
                    </div>
                    
                  </div>
                 <Link className="btn btn-success btn-sm" to={`profile/${data.username}`}>View profile</Link>
                </Card.Body>
              </Card>
            </Col>  
                  
                  
                  )
              }
            
           
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Team;
