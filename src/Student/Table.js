import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  
class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
    DeleteStudent= () =>{  
      axios.delete('https://localhost:44398/Api/Student/Delete?id='+this.props.obj.Id)  
     .then(json => {  
     if(json.data.Status==='Delete'){  
     alert('Record deleted successfully!!');  
     }  
     })  
     } 

  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.StudentName}  
          </td>  
          <td>  
            {this.props.obj.Grade}  
          </td>
          <td>  
            {this.props.obj.Address}  
          </td>  
          <td>  
            {this.props.obj.City}  
          </td>  
          <td>  
            {this.props.obj.Country}  
          </td>  
          <td>  
            {this.props.obj.Postal}  
          </td>  
          <td>  
            {this.props.obj.Phone}  
          </td>  
          <td>  
            {this.props.obj.Email}  
          </td>  
          <td>  
           <button type="button" className="btn btn-success">Edit</button>  
          </td>  
          <td>  
            <button type="button" className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  

export default Table;  