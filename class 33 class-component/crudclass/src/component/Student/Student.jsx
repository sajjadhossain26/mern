import axios from 'axios';
import {Component} from 'react'
import {Alert, Button, Card, CloseButton, Col, Container, Row, Table} from 'react-bootstrap'
import StudentModal from './StudentModal';
class Student extends Component{
    constructor(props){
        super(props);
        this.state={
          modal: {
              status: false,
              type: ""
          },
          alert:{
              msg: "hello world",
              type: "danger",
              status: false

          },
          students:[]
        }

    }
    
    render(){
            const {modal, students}= this.state;
            const {status, msg, type}= this.state.alert;
            const handleModalShow=()=>{
              this.setState({
                  ...this.state,
                  modal: {
                      status: true,
                      type: "create"
                  }
              })
            };
             const handleModalHide=()=>{
              this.setState({
                  ...this.state,
                 modal: {
                      status: false,
                      type: ""
                  }
              })
            };
              const handleAlertShow=()=>{
              this.setState({
                  ...this.state,
                  alert:{
                      status: true,
                      msg: "successfully worked",
                      type:"success"
                  }
              })
            };
              const handleAlertHide=()=>{
              this.setState({
                  ...this.state,
                  alert:{
                      status: false,
                      msg: "",
                      type:""
                  }
              })
            };
            // Single student data show
            const handleSingleDataShow=()=>{
                this.setState({
                    ...this.state,
                   modal: {
                       status: true,
                       type: "show"
                   }
                })
            };
             // Single student data edit
            const handleSingleDataEdit=()=>{
                this.setState({
                    ...this.state,
                    modal: {
                       status: true,
                       type: "edit"
                   }
                })
            };
             // Single student data delete
            const handleSingleDataDelete=()=>{
                this.setState({
                    ...this.state,
                    modal: {
                       status: true,
                       type: "delete"
                   }
                })
            }
            const handleStudentviewData=()=>{
               try{
                    axios.get('http://localhost:5050/students').then(res=>{
                    this.setState((prevState)=>({
                     ...prevState,
                     students: res.data
                    
                    }))
                })
               }catch(err){
                   console.log(err)
               }
            }
            handleStudentviewData()
        return(
            <Container>
              <Row>
                  <Col md={6}  className='justify-content-center m-auto my-5' >
                    <Card>
                        <Card.Body>
                        <Button variant='primary' onClick={handleModalShow}>ADD New Developer</Button>
                          <StudentModal show={modal.status} handleModalHide={handleModalHide} type={modal.type} />
                          {
                              status && <Alert className='justify-content-between d-flex' variant={type}>{msg} <CloseButton onClick={handleAlertHide}></CloseButton></Alert>

                          }
                            <Table className='table'>
                                <thead>
                                   <tr>
                                    <th>serial</th>
                                    <th>name</th>
                                    <th>cell</th>
                                    <th>photo</th>
                                    <th>action</th>
                                    
                                   </tr>
                                </thead>
                                <tbody>
                                    {
                                        students.map((data,index)=>
                                               <tr>
                                        <td>{index +1}</td>
                                        <td>{data.name}</td>
                                        <td>{data.cell}</td>
                                        <td><img style={{width: "30px",height: "30px", objectFit: "cover"}} src={data.photo} alt="" /></td>
                                        <td>
                                            <Button onClick={handleSingleDataShow} variant='primary'>View</Button>&nbsp;
                                            <Button onClick={handleSingleDataEdit} variant='info'>Edit</Button>&nbsp;
                                            <Button onClick={handleSingleDataDelete} variant='danger'>Delete</Button>
                                        </td>
                                    </tr>
                                            
                                            )
                                    }
                                 
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                  </Col>
              </Row>
            </Container>
        )
    }

}
export default Student;