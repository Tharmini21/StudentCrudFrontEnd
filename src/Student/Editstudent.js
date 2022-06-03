import React from 'react';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios'
import '../Student/Addstudent.css'
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
class Edit extends React.Component {

    state = {
        isLoaded: false,
        RowId: '',
        StudentName: '',
        Grade: '',
        Address: '',
        City: '',
        Country: '',
        Postal: '',
        Phone: '',
        Email: ''
    }
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

    }

    componentDidMount() {
        //const { id } = useParams();
        const windowUrl = window.location.href;
        const answer_array = windowUrl.split('/');
        let rowid = answer_array[4];
        axios.get(`https://localhost:44398/Api/Student/StudentdetailByrowId/${rowid}`)
            .then(response => {
                this.setState({
                    isLoaded: true,
                    StudentName: response.data.cells[0].value,
                    Grade: response.data.cells[1].value,
                    City: response.data.cells[2].value,
                    Address: response.data.cells[3].value,
                    Country: response.data.cells[4].value,
                    Postal: response.data.cells[5].value,
                    Phone: response.data.cells[6].value,
                    Email: response.data.cells[7].value,
                    RowId: response.data.rowid
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
        console.log(this.state);
        const windowUrl = window.location.href;
        const answer_array = windowUrl.split('/');
        let rowid = answer_array[4];
        this.state.RowId = rowid;
        const student = {
            RowId: rowid,
            StudentName: this.state.StudentName,
            Grade: this.state.Grade,
            Address: this.state.Address,
            City: this.state.City,
            Country: this.state.Country,
            Postal: this.state.Postal,
            Phone: this.state.Phone,
            Email: this.state.Email
        }
        axios.post('https://localhost:44398/Api/Student/Updatestudent', {
            RowId: rowid,
            StudentName: this.state.StudentName,
            Grade: this.state.Grade,
            Address: this.state.Address,
            City: this.state.City,
            Country: this.state.Country,
            Postal: this.state.Postal,
            Phone: this.state.Phone,
            Email: this.state.Email
        })
            .then(res => {
                if (res.data) {
                    console.log(res.data);
                    alert(res.data);
                    //this.props.history.push('/Studentlist')  
                }
                else {
                    alert('Data not Updated');
                    //this.props.history.push('/Studentlist')  
                }
            });

        // const requestOptions = {
        //     method: 'PUT',
        //     headers: { 
        //         'Content-Type': 'application/json',
        //     },
        //     body: student
        // };
        // fetch('https://localhost:44398/Api/Student/AddorUpdatestudent/', requestOptions)
        //     .then(response => {
        //         response.json()
        //         console.log(response.data)
        //     })
        //     .catch(error => {
        //         console.log('There was an error!', error);
        //     });
        // axios.post('https://localhost:44398/Api/Student/AddorUpdatestudent/', this.state)
        //     .then(res => console.log(res.data));
        //             axios.put(`https://localhost:44398/Api/Student/AddorUpdatestudent/${rowid}`, student)
        //             //{headers: { 'Content-Type': 'application/json' }})
        // .then(response => { 
        // 	console.log(response.data)
        // })
        // .catch(error => {
        //     console.log(error.response)
        // });

    }
    render() {
        const { isLoaded, business } = this.state;
        if (!isLoaded) {
            return <div>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                Loading...
            </div>;
        } else {
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

}

export default Edit;