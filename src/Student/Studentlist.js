import React, { Component } from 'react';
import axios from 'axios';
// import Table from './Table';  
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
export default class Studentlist extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            business: []
        };

    }
    componentDidMount() {
        debugger;
        axios.get('https://localhost:44398/Api/Student/GetStudentDetails')
            .then(response => {
                this.setState({ isLoaded: true, business: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.business.map(function (object, i) {
            return <Table obj={object} key={i} />;
        });
    }
    //{ this.tabRow() }  
    DeleteStudent = (rowId) => {
        const url = `https://localhost:44398/Api/Student/Delete/${rowId}`;
        axios.delete(url)
            .then(json => {
                if (json.data != '') {
                    alert(json.data);
                }
            })
    }
    tableRows() {
        return this.state.business.map(
            (element) => {
                return (

                    <tr>
                        <td>{element.studentName}</td>
                        <td>{element.grade}</td>
                        <td>{element.address}</td>
                        <td>{element.city}</td>
                        <td>{element.country}</td>
                        <td>{element.postal}</td>
                        <td>{element.phone}</td>
                        <td>{element.email}</td>
                        <td>
                            <Link to={"/edit/" + element.rowId} className="btn btn-success">Edit</Link>
                        </td>
                        <td>
                            <button type="button" onClick={() => this.DeleteStudent(element.rowId)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>

                )
            })
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
                <div>
                    <h4 align="center">Student List</h4>
                    <table className="table table-striped" style={{ marginTop: 10 }}>
                        <thead>
                            <tr>
                                <th>StudentName</th>
                                <th>Grade</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Country</th>
                                <th>Postal</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th colSpan="4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.tableRows()}
                        </tbody>
                        <tfoot>

                        </tfoot>
                       
                    </table>
                </div>
            );
        }
    }
}