import React from 'react';  
import axios from 'axios';  
import '../Student/Addstudent.css'  
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
class Addstudent extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
    formErrors: {Email: '', StudentName: '',Phone:'',Grade:''},
    emailValid: false,
    studentNameValid: false,
    phoneValid: false,
    gradeValid: false,
    formValid: false,
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
validateField(fieldName, value) {
  let fieldValidationErrors = this.state.formErrors;
  let emailValid = this.state.emailValid;
  let phoneValid = this.state.phoneValid;
  let gradeValid = this.state.gradeValid;

  switch(fieldName) {
    case 'Email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.Email = emailValid ? '' : ' is invalid';
      break;
    case 'Phone':
      phoneValid = value.length == 10;
      fieldValidationErrors.Phone = phoneValid ? '': ' is too short';
      break;
    case 'Grade':
        gradeValid = value.length == 1;
        fieldValidationErrors.Grade = gradeValid ? '': ' is too big';
        break;
    default:
      break;
  }
  this.setState({formErrors: fieldValidationErrors,
                  emailValid: emailValid,
                  phoneValid: phoneValid,
                  gradeValid: gradeValid
                }, this.validateForm);
}

validateForm() {
  this.setState({formValid: this.state.emailValid && this.state.passwordValid});
}
Addstudent=()=>{  
  const Student = {
    StudentName:this.state.StudentName,
    Grade:this.state.Grade,  
    Address:this.state.Address,
    City:this.state.City,
    Country:this.state.Country,
    Postal:this.state.Postal,  
    Phone:this.state.Phone,
    Email:this.state.Email
  };
  var bodyFormData = new FormData();
  bodyFormData.append('StudentName', this.state.StudentName);
  bodyFormData.append('Grade', this.state.Grade);
  bodyFormData.append('Address', this.state.Address);
  bodyFormData.append('City', this.state.City);
  bodyFormData.append('Country', this.state.Country);
  bodyFormData.append('Postal', this.state.Postal);
  bodyFormData.append('Phone', this.state.Phone);
  bodyFormData.append('Email', this.state.Email);
  var body = {
    StudentName:this.state.StudentName,
    Grade:this.state.Grade,  
    Address:this.state.Address,
    City:this.state.City,
    Country:this.state.Country,
    Postal:this.state.Postal,  
    Phone:this.state.Phone,
    Email:this.state.Email
}
  axios.post('https://localhost:44398/Api/Student/AddorUpdatestudent', {
    StudentName:this.state.StudentName,
    Grade:this.state.Grade,  
    Address:this.state.Address,
    City:this.state.City,
    Country:this.state.Country,
    Postal:this.state.Postal,  
    Phone:this.state.Phone,
    Email:this.state.Email
})  
  // axios({
  //   url: "https://localhost:44398/Api/Student/AddorUpdatestudent/",
  //   method: "post",
  //   contentType: "application/json",
  //   data: JSON.stringify(body)
  // })
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");  
//this.props.history.push('/Studentlist')  
}  
else{  
alert('Data not Saved');  
//this.props.history.push('/Studentlist')  
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
          <Label for="name" sm={2}>Student Name *</Label>  
          <Col sm={10}>  
            <Input type="text" name="StudentName" required onChange={this.handleChange} value={this.state.StudentName} placeholder="Enter Name" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="grade" sm={2}>Grade *</Label>  
          <Col sm={10}>  
            <Input type="number" name="Grade" required onChange={this.handleChange} value={this.state.Grade} placeholder="Enter Grade 1 to 12" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Password" sm={2}>Address</Label>  
          <Col sm={10}>  
            <Input type="text" name="Address" required onChange={this.handleChange} value={this.state.Address} placeholder="Enter Address" />  
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
            <Input type="number" minLength={6} name="Postal" onChange={this.handleChange} value={this.state.Postal} placeholder="Enter Postal" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="Password" sm={2}>Phone *</Label>  
          <Col sm={10}>  
            <Input type="number" minLength={10} name="Phone" required onChange={this.handleChange} value={this.state.Phone} placeholder="Enter Phone" />  
          </Col>  
        </FormGroup> 
        <FormGroup row>  
          <Label for="Password" sm={2}>Email *</Label>  
          <Col sm={10}>  
            <Input type="email" name="Email" required onChange={this.handleChange} value={this.state.Email} placeholder="Enter Email" />  
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