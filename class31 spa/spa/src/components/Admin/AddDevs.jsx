import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AddDevs = () => {


  return (
    <>
    <section className="adddevs my-3">
        <Container>
            <Row>
              
                <Col md={6} className="m-auto">
                    <Card>
                        <Card.Header>
                            <h1>Add new devs form</h1>
                        </Card.Header>
                        <Card.Body>
                                <Form method='POST' id="devs_form_submit">
                                <div className="my-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control name='name' type='text'></Form.Control>
                                </div>
                                  <div className="my-3">
                                    <Form.Label>Skill</Form.Label>
                                    <Form.Control name='skill' type='text'></Form.Control>
                                </div>
                                  <div className="my-3">
                                    <Form.Label>Cell</Form.Label>
                                    <Form.Control name='cell' type='text'></Form.Control>
                                </div>
                                  <div className="my-3">
                                    <Form.Label>Photo</Form.Label>
                                    <Form.Control name='photo' type='text'></Form.Control>
                                </div>
                                  <div className="my-3">
                                    <Form.Label>Facebook</Form.Label>
                                    <Form.Control name='facebook' type='text'></Form.Control>
                                </div>
                                  <div className="my-3">
                                    <Form.Label>Twitter</Form.Label>
                                    <Form.Control name='twitter' type='text'></Form.Control>
                                </div>
                                  <div className="my-3">
                                    <Form.Label>linkedin</Form.Label>
                                    <Form.Control name='linkedin' type='text'></Form.Control>
                                </div>
                                  <div className="my-3">
                                   <Button type='submit' className='btn btn-primary w-100'>ADD NEW DEVELOPER</Button>
                                </div>
                            </Form>
                        </Card.Body>
                        <Card.Footer>
                            <Link to="/">Back to Home</Link>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
        
    </section>
    </>
  )
}

export default AddDevs