import React from 'react';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
export default function Edit() {
    const navigate = useNavigate();
    console.log(navigate);
    const isLoaded = false;
    const [StudentName, setStudentName] = useState('');
    const [Grade, setGrade] = useState('');
    const [Address, setAddress] = useState('');
    const [City, setCity] = useState('');
    const [Country, setCountry] = useState('');
    const [Postal, setPostal] = useState('');
    const [Phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');

    // constructor(props) {
    //     super(props)

    //     this.onChangeStudentName = this.onChangeStudentName.bind(this);
    //     this.onChangeGrade = this.onChangeGrade.bind(this);
    //     this.onChangeAddress = this.onChangeAddress.bind(this);
    //     this.onChangeCity = this.onChangeCity.bind(this);
    //     this.onChangeCountry = this.onChangeCountry.bind(this);
    //     this.onChangePostal = this.onChangePostal.bind(this);
    //     this.onChangePhone = this.onChangePhone.bind(this);
    //     this.onChangeEmail = this.onChangeEmail.bind(this);
    //     this.onSubmit = this.onSubmit.bind(this);

    // }

    StudentdetailByrowId = () => {
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


    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const windowUrl = window.location.href;
        const answer_array = windowUrl.split('/');
        let rowid = answer_array[4];
        this.state.RowId = rowid;
        axios.post('https://localhost:44398/Api/Student/Updatestudent', {
            RowId: rowid,
            StudentName,
            Grade,
            Address,
            City,
            Country,
            Postal,
            Phone,
            Email
        }).then(res => {
            if (res.data) {
                console.log(res.data);
                alert(res.data);
                navigate('/Studentlist');
            }
            else {
                alert('Data not Updated');
            }
        });
    }

    if (!isLoaded) {
        return <div>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            Loading...
        </div>
    } else {
        return (
            <Container className="App">

                <h4 className="PageHeading">Update Student Informations</h4>
                <Form className="form" onSubmit={this.onSubmit}>
                    <Col>
                        <FormGroup row>
                            <Label for="name" sm={2}>StudentName</Label>
                            <Col sm={10}>
                                <Input type="text" name="StudentName" value={this.state.StudentName} onChange={handleChange}
                                    placeholder="Enter Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>Grade</Label>
                            <Col sm={10}>
                                <Input type="text" name="Grade" value={this.state.Grade} onChange={handleChange} placeholder="Enter Grade" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>City</Label>
                            <Col sm={10}>
                                <Input type="text" name="City" value={this.state.City} onChange={handleChange} placeholder="Enter City" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>Address</Label>
                            <Col sm={10}>
                                <Input type="text" name="Address" value={this.state.Address} onChange={handleChange} placeholder="Enter Address" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>Country</Label>
                            <Col sm={10}>
                                <Input type="text" name="Country" onChange={this.onChangeCountry} value={handleChange} placeholder="Enter Country" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>Postal</Label>
                            <Col sm={10}>
                                <Input type="text" name="Postal" onChange={this.onChangePostal} value={handleChange} placeholder="Enter Postal" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>Phone</Label>
                            <Col sm={10}>
                                <Input type="text" name="Phone" onChange={this.onChangePhone} value={handleChange} placeholder="Enter Phone" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="text" name="Email" onChange={this.onChangeEmail} value={handleChange} placeholder="Enter Email" />
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
