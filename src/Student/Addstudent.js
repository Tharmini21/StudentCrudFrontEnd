import React from 'react';  
import axios from 'axios';  
import '../Student/Addstudent.css'  
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
class Addstudent extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
    StudentName:'',  
    Grade:'',  
    Address:'',  
    City:'',
    Country:'',  
    Postal:'',  
    Phone:'',  
    Email:''    
}   
}
Addstudent=()=>{  
  axios.post('https://localhost:44398/Api/Student/AddorUpdatestudent/', 
  {
   StudentName:this.state.StudentName,
   Grade:this.state.Grade,  
   Address:this.state.Address,
   City:this.state.City,
   Country:this.state.Country,
   Postal:this.state.Postal,  
   Phone:this.state.Phone,
   Email:this.state.Email
})  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");  
this.props.history.push('/Studentlist')  
}  
else{  
alert('Data not Saved');  
debugger;  
this.props.history.push('/Studentlist')  
}  
})  
}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Student Informations</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="name" sm={2}>Student Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="StudentName" onChange={this.handleChange} value={this.state.StudentName} placeholder="Enter Name" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="grade" sm={2}>Grade</Label>  
          <Col sm={10}>  
            <Input type="text" name="Grade" onChange={this.handleChange} value={this.state.Grade} placeholder="Enter Grade 1 to 12" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Password" sm={2}>Address</Label>  
          <Col sm={10}>  
            <Input type="text" name="Address" onChange={this.handleChange} value={this.state.Address} placeholder="Enter Address" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Password" sm={2}>City</Label>  
          <Col sm={10}>  
            <Input type="text" name="City" onChange={this.handleChange} value={this.state.City} placeholder="Enter City" />  
          </Col>  
        </FormGroup> 
        <FormGroup row>  
          <Label for="Password" sm={2}>Country</Label>  
          <Col sm={10}>  
            <Input type="text" name="Country" onChange={this.handleChange} value={this.state.Country} placeholder="Enter Country" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Password" sm={2}>Postal</Label>  
          <Col sm={10}>  
            <Input type="text" name="Postal" onChange={this.handleChange} value={this.state.Postal} placeholder="Enter Postal" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Password" sm={2}>Phone</Label>  
          <Col sm={10}>  
            <Input type="text" name="Phone" onChange={this.handleChange} value={this.state.Phone} placeholder="Enter Phone" />  
          </Col>  
        </FormGroup> 
        <FormGroup row>  
          <Label for="Password" sm={2}>Email</Label>  
          <Col sm={10}>  
            <Input type="text" name="Email" onChange={this.handleChange} value={this.state.Email} placeholder="Enter Email" />  
          </Col>  
        </FormGroup>  
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={9}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.Addstudent} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={1}>  
            <Button color="danger">Cancel</Button>{' '}  
          </Col>  
          <Col sm={9}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>  
  </Container>  
);  
}  
   
}  

   
export default Addstudent;