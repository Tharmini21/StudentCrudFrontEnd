import React, { Component } from 'react';
import axios from 'axios';
// import Table from './Table';  
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import '../App.css';
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
export default class Studentlist extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            business: [],
            limit: 20,
            skip: 0,
            page: 1,
            TotalCount: 0,

        };
    }
    componentDidMount() {
        this.fetchUsers(this.state.page);
    }

    fetchUsers(page) {
        axios.get(`https://localhost:44398/Api/Student/GetStudentDetails?pageSize=${this.state.limit}&page=${page}`)
            .then(response => {
                this.setState({ isLoaded: true, business: response.data });
                this.setState({ TotalCount: response.data[0].totalRowCount });
                if (response.data > 0) {

                    // const totalPages = Math.ceil(this.state.TotalCount / this.state.limit);
                    // this.setState({ totalPageCount: totalPages});
                    // this.TotalCount=response.data[0].totalRowCount;
                    //,totalPages: Math.ceil(this.state.TotalCount / this.state.limit)

                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    nextPage(num) {
        this.setState({
            // skip: this.state.skip + this.state.limit,
            page: num,
        })
        this.fetchUsers(num);
    }
    // previousPage() {
    //     if (this.state.skip > 0) {
    //         this.setState({
    //             skip: this.state.skip - this.state.limit,
    //         })
    //     }
    // }
    previousPage(num) {
        if (this.state.page > 1) {
            this.setState({
                // page: this.state.page - 1,
                page: num,
            },
                // this.fetchUsers(this.state.page))
                this.fetchUsers(num))
        }

    }
    setCount(numb) {
        this.setState({
            count: numb,
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
                    this.fetchUsers(this.state.page);
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
                            <Link to={"/edit/" + element.rowId} className="btn btn-success"><FaIcons.FaUserEdit></FaIcons.FaUserEdit></Link>
                        </td>
                        <td>
                            <button type="button" onClick={() => this.DeleteStudent(element.rowId)} className="btn btn-danger"><AiIcons.AiFillDelete></AiIcons.AiFillDelete></button>
                        </td>
                    </tr>

                )
            })
    }

    render() {
        const { isLoaded, business, totalPages } = this.state;
        if (!isLoaded) {
            return <div>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                Loading...
            </div>;
        } else {
            return (<div className="list" >
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
                <div>
                    <button onClick={() => this.previousPage(this.state.page - 1)} disabled={this.state.page === 1}>Previous Page</button>
                    <button onClick={() => this.nextPage(this.state.page + 1)} disabled={this.state.page === Math.ceil(this.state.TotalCount / this.state.limit)}>Next Page</button>
                </div>
            </div>
            );
        }
    }
}