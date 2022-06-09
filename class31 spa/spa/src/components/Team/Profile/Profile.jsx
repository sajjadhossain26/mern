import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import "./Profile.css"

const Profile = () => {

  // username params
  const {username}= useParams();
  // single devs data
  const [profile, setProfile]= useState({
    name: '',
    photo: '',
    skill: '',
    cell: '',
    email: ''

  });

  useEffect(()=>{
    axios.get(`http://localhost:5050/devs?username=${username}`).then(res=>{
      setProfile({...res.data[0]})
    }).catch(error=>{
      console.log("error")
    },[profile])
  })
  return (
    <section className="profile-page my-3">
        <Container >
            <Row>
                <Col md={8} className="m-auto">
                 <Card className='shadow'>
                     <Card.Body>
                           <div className="profile">
                       <div className="profile-image">
                           <img src={profile.photo} alt="" />
                       </div>
                       <div className="profile-content">
                           <h1>{profile.name}</h1>
                           <span>{profile.skill}</span>
                           <p>{profile.email}</p>
                           <div className="team-icon profile-icon">
                        <ul>
                          <li> <a href="#"><i class="bx bxl-facebook-circle"></i></a></li> 
                          <li><a href="#"> <i class="bx bxl-instagram"></i></a></li>
                          <li><a href="#"> <i class="bx bxl-linkedin"></i></a> </li>
                        </ul>
                      </div>
                       </div>
                   </div>
                     </Card.Body>
                 </Card>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Profile