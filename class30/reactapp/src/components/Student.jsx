import React, { useState } from "react";
import {
  Accordion,
  Alert,
  Button,
  Card,
  CardImg,
  Carousel,
  CloseButton,
  Col,
  Container,
  Modal,
  Row,
} from "react-bootstrap";

const Student = () => {
  // alert management
  const [alert, setAlert] = useState({
    msg: "All field are required!",
    type: "danger",
    status: true,
  });
  const handleAlertClose = () => {
    setAlert({
      msg: "",
      type: "",
      status: false,
    });
  };

  // modal management

  const [modal, setModal] = useState(false);
  const handleModal = () => {
    return setModal(true);
  };
  const handleModalClose = () => {
    return setModal(false);
  };
  return (
    <>
      <Container className="my-5">
        <Row>
          <Carousel>
            <Carousel.Item>
              <img
                src="https://scontent.frjh3-1.fna.fbcdn.net/v/t39.30808-6/270610970_1421488684914370_8374195226376503272_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHQQOWjj-2vjMr7c5V5zfaHRdOX27PoptNF05fbs-im0wg719c_SHFY_Uz8qCTV-05ylNWahXpQDCXOP6NBOoDe&_nc_ohc=F_VbvzSmEBsAX81BUdX&_nc_ht=scontent.frjh3-1.fna&oh=00_AT-IG68gRDh67hsbRPFCjpVGKyEAKOEv8NMMn2r6FYB-BQ&oe=625BB733"
                alt=""
              />
              <Carousel.Caption>
                <h2>I am a mern stack developer</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                  rem modi recusandae nam aspernatur, eveniet eum eius fugiat
                  sint velit.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
              <Carousel.Caption>
                <h2>I am a mern stack developer</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                  rem modi recusandae nam aspernatur, eveniet eum eius fugiat
                  sint velit.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Col md={6} className="m-auto ">
            <Card className="shadow">
              <CardImg src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"></CardImg>

              <Card.Body>
                <Card.Title>
                  <h4>we are devs</h4>
                </Card.Title>
                <Card.Text>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur maxime, modi optio iste consectetur sapiente
                    minima placeat dignissimos accusantium sequi?
                  </p>
                  {alert.status && (
                    <Alert
                      className="d-flex justify-content-between"
                      variant={alert.type}
                    >
                      {alert.msg}
                      <CloseButton onClick={handleAlertClose}></CloseButton>
                    </Alert>
                  )}
                </Card.Text>
                <Card.Link>Hello</Card.Link>
                <Button variant="info" onClick={handleModal}>
                  Show Modal
                </Button>
              </Card.Body>
              {/* accrodion */}
            </Card>
            <Card className="my-4">
              <Accordion defaultActiveKey={0}>
                <Accordion.Item eventKey={0}>
                  <Accordion.Header>
                    <h6>I am accordion header</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae, eius.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={1}>
                  <Accordion.Header>
                    <h6>I am accordion header</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae, eius.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey={2}>
                  <Accordion.Header>
                    <h6>I am accordion header</h6>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Beatae, eius.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal show={modal} onHide={handleModalClose}>
        <Modal.Header>
          <h3>Creat a Developer form</h3>
          <CloseButton onClick={handleModalClose}></CloseButton>
        </Modal.Header>
        <Modal.Body>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            cumque a est. Laborum iure quaerat recusandae ut quos quia
            laudantium?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <p>All content reserved by sajjad</p>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Student;
