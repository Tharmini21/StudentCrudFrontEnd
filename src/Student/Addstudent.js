import React, { Component } from 'react';
import axios from 'axios';
import '../Student/Addstudent.css'
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import Studentlist from './Studentlist';
// import { hashHistory as history } from "react-router";
import { withRouter } from 'react-router-dom';
// import {  Redirect} from 'react-router-dom';
//import { useHistory } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
// import { createBrowserHistory as history } from 'history';
import history from '../history';
import { useNavigate } from 'react-router-dom';
class Addstudent extends React.Component {

  constructor(props) {
    console.log(props)
    super(props)
    this.props = props;
    // let navigate = useNavigate();
    const { match, location, history } = this.props;
    console.log(history);
    console.log(location);

    // let history = useHistory();
    this.state = {
      formErrors: { Email: '', StudentName: '', Phone: '', Grade: '' },
      emailValid: false,
      studentNameValid: false,
      phoneValid: false,
      gradeValid: false,
      formValid: false,
      StudentName: '',
      Grade: '',
      Address: '',
      City: '',
      Country: '',
      Postal: '',
      Phone: '',
      Email: ''
    }
  }
  validateField(fieldName, value) {
    <div className={`form
                 ${this.errorClass(this.state.formErrors.Email)}`}></div>
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let phoneValid = this.state.phoneValid;
    let gradeValid = this.state.gradeValid;
    let studentNameValid = this.state.studentNameValid;

    switch (fieldName) {
      case 'StudentName':
        studentNameValid = value != '';
        fieldValidationErrors.StudentName = studentNameValid ? '' : ' is not to be empty';
        break;
      case 'Email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.Email = emailValid ? '' : ' is invalid';
        break;
      case 'Phone':
        phoneValid = value.length <= 15;
        fieldValidationErrors.Phone = phoneValid ? '' : ' is too short';
        break;
      case 'Grade':
        gradeValid = value.length <= 2;
        fieldValidationErrors.Grade = gradeValid ? '' : ' is too big';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      phoneValid: phoneValid,
      gradeValid: gradeValid,
      studentNameValid: studentNameValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.studentNameValid && this.state.emailValid && this.state.phoneValid && this.state.gradeValid });
  }
  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }
  Addstudent = () => {

    var body = {
      StudentName: this.state.StudentName,
      Grade: this.state.Grade,
      Address: this.state.Address,
      City: this.state.City,
      Country: this.state.Country,
      Postal: this.state.Postal,
      Phone: this.state.Phone,
      Email: this.state.Email
    }
    axios.post('https://localhost:44398/Api/Student/Addstudent', {
      StudentName: this.state.StudentName,
      Grade: this.state.Grade,
      Address: this.state.Address,
      City: this.state.City,
      Country: this.state.Country,
      Postal: this.state.Postal,
      Phone: this.state.Phone,
      Email: this.state.Email
    })
      .then(json => {
        if (json.data) {
          console.log(json.data);
          alert(json.data); 
          // navigate("/studentlist");
          // <Navigate replace to="/edit/2091199611725700" />
          //   <Router>
          //   <Routes>
          //     <Route path="/" element={<Navigate replace to="/home" />} />
          //   </Routes>
          // </Router>
          // <Redirect to="/studentlist" />
          //this.render('/Studentlist')
          //ReactDOM.render(Studentlist, document.getElementById('list'));
          // <Redirect to="/Studentlist" />
          // history.push('/Studentlist');
          // this.props.history.push({pathname: '/Studentlist',state: body})
          const root = ReactDOM.createRoot(document.getElementById('root'));
          root.render(<Studentlist />);
          // this.props.history.push('/Studentlist');
          // const root = ReactDOM.createRoot(document.getElementById('list'));
          // root.render(
          //   <React.StrictMode>
          //     < Studentlist/>
          //   </React.StrictMode>
          // );
        }
        else {
          alert('Data not Saved');
          //this.props.history.push('/Studentlist')  
        }
      })
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });
    //this.setState({[e.target.name]:e.target.value});
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
                <Input type="text" minLength={10} name="Postal" onChange={this.handleChange} value={this.state.Postal} placeholder="Enter Postal" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="Password" sm={2}>Phone *</Label>
              <Col sm={10}>
                <Input type="text" minLength={15} name="Phone" required onChange={this.handleChange} value={this.state.Phone} placeholder="Enter Phone" />
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
                <Label hidden={this.state.formValid}>(To enable this button fill required field)</Label>
              </Col>
              <Col sm={1}>
                <button type="button" onClick={this.Addstudent} disabled={!this.state.formValid} className="btn btn-success">Submit</button>
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