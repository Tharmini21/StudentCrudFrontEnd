import React from 'react';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios'
import '../Student/Addstudent.css'
class Edit extends React.Component {
    constructor(props) {
        super(props)

        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeGrade = this.onChangeGrade.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeCountry = this.onChangeCountry.bind(this);
        this.onChangePostal = this.onChangePostal.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
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

    componentDidMount() {
        axios.get('http://localhost:44398/Api/Student/StudentdetailByrowId?id=' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    StudentName: response.data.StudentName,
                    Grade: response.data.Grade,
                    City: response.data.City,
                    Address: response.data.Address,
                    Country: response.data.Country,
                    Postal: response.data.Postal,
                    Phone: response.data.Phone,
                    Email: response.data.Email
                });

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeStudentName(e) {
        this.setState({
            StudentName: e.target.value
        });
    }
    onChangeGrade(e) {
        this.setState({
            Grade: e.target.value
        });
    }
    onChangeCity(e) {
        this.setState({
            City: e.target.value
        });
    }
    onChangeAddress(e) {
        this.setState({
            Address: e.target.value
        });
    }
    onChangeCountry(e) {
        this.setState({
            Country: e.target.value
        });
    }
    onChangePostal(e) {
        this.setState({
            Postal: e.target.value
        });
    }
    onChangePhone(e) {
        this.setState({
            Phone: e.target.value
        });
    }
    onChangeEmail(e) {
        this.setState({
            Email: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            RowId: this.props.match.params.id,
            StudentName: this.state.StudentName,
            Grade: this.state.Grade,
            Address: this.state.Address,
            City: this.state.City,
            Country: this.state.Country,
            Postal: this.state.Postal,
            Phone: this.state.Phone,
            Email: this.state.Email
        };
        axios.post('https://localhost:44398/Api/Student/AddorUpdatestudent/', obj)
            .then(res => console.log(res.data));
        debugger;
        this.props.history.push('/Studentlist')
    }
    render() {
        return (
            <Container className="App">

                <h4 className="PageHeading">Update Student Informations</h4>
                <Form className="form" onSubmit={this.onSubmit}>
                    <Col>
                        <FormGroup row>
                            <Label for="name" sm={2}>StudentName</Label>
                            <Col sm={10}>
                                <Input type="text" name="StudentName" value={this.state.StudentName} onChange={this.onChangeStudentName}
                                    placeholder="Enter Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>Grade</Label>
                            <Col sm={10}>
                                <Input type="text" name="Grade" value={this.state.Grade} onChange={this.onChangeGrade} placeholder="Enter Grade" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>City</Label>
                            <Col sm={10}>
                                <Input type="text" name="City" value={this.state.City} onChange={this.onChangeCity} placeholder="Enter City" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>Address</Label>
                            <Col sm={10}>
                                <Input type="text" name="Address" value={this.state.Address} onChange={this.onChangeAddress} placeholder="Enter Address" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>Country</Label>
                            <Col sm={10}>
                                <Input type="text" name="Country" onChange={this.onChangeCountry} value={this.state.Country} placeholder="Enter Country" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>Postal</Label>
                            <Col sm={10}>
                                <Input type="text" name="Postal" onChange={this.onChangePostal} value={this.state.Postal} placeholder="Enter Postal" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>Phone</Label>
                            <Col sm={10}>
                                <Input type="text" name="Phone" onChange={this.onChangePhone} value={this.state.Phone} placeholder="Enter Phone" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="text" name="Email" onChange={this.onChangeEmail} value={this.state.Email} placeholder="Enter Email" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={9}>
                            </Col>
                            <Col sm={1}>
                                <Button type="submit" color="success">Submit</Button>{' '}
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

export default Edit;