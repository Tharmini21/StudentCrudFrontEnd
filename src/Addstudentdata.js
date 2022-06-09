import React, { Component, useState } from 'react';
import axios from 'axios';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import history from './history';
import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router';
import Studentlist from './Student/Studentlist';
export default function Addstudent() {
    // let history = useHistory();
    // console.log(history);
    const navigate = useNavigate();
    console.log(navigate);
    const [StudentName, setStudentName] = useState('');
    const [Grade, setGrade] = useState('');
    const [Address, setAddress] = useState('');
    const [City, setCity] = useState('');
    const [Country, setCountry] = useState('');
    const [Postal, setPostal] = useState('');
    const [Phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');
    const postData = () => {
        axios.post('https://localhost:44398/Api/Student/Addstudent', {
            StudentName,
            Grade,
            Address,
            City,
            Country,
            Postal,
            Phone,
            Email
        }).then(json => {
                if (json.data) {
                    console.log(json.data);
                    alert(json.data);
                    navigate('/Studentlist');
                    //history.push('./Student/Studentlist')
                }
                else {
                    alert('Data not Saved');
                }
            })
    }
    return (
        <Container className="App">
            <h4 className="PageHeading">Enter Student Informations</h4>
            <Form className="form">
                <Col>
                    <FormGroup row>
                        <Label for="name" sm={2}>Student Name *</Label>
                        <Col sm={10}>
                            <Input type="text" name="StudentName" required onChange={(e) => setStudentName(e.target.value)} placeholder="Enter Name" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="grade" sm={2}>Grade *</Label>
                        <Col sm={10}>
                            <Input type="number" name="Grade" required onChange={(e) => setGrade(e.target.value)} placeholder="Enter Grade 1 to 12" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Password" sm={2}>Address</Label>
                        <Col sm={10}>
                            <Input type="text" name="Address" required onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Password" sm={2}>City</Label>
                        <Col sm={10}>
                            <Input type="text" name="City" onChange={(e) => setCity(e.target.value)} placeholder="Enter City" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Password" sm={2}>Country</Label>
                        <Col sm={10}>
                            <Input type="text" name="Country" onChange={(e) => setCountry(e.target.value)} placeholder="Enter Country" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Password" sm={2}>Postal</Label>
                        <Col sm={10}>
                            <Input type="text" minLength={10} name="Postal" onChange={(e) => setPostal(e.target.value)} placeholder="Enter Postal" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Password" sm={2}>Phone *</Label>
                        <Col sm={10}>
                            <Input type="text" minLength={15} name="Phone" required onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="Password" sm={2}>Email *</Label>
                        <Col sm={10}>
                            <Input type="email" name="Email" required onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                        </Col>
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup row>
                        <Col sm={9}>
                        </Col>
                        <Col sm={1}>
                            <button type="button" onClick={postData} className="btn btn-success">Submit</button>
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

