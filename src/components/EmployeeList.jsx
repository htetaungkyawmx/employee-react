import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { deleteEmployee, getAllEmployees } from '../service/EmployeeService';
import { useNavigate } from 'react-router-dom';

export const EmployeeList = () => {
    const [employees,setEmployees]=useState([]);
    const navigator = useNavigate();
    useEffect(() =>{
       getAllEmployeeList();
    },[])

    const getAllEmployeeList = () => getAllEmployees()
       .then( res => setEmployees(res.data))
       .catch( err => console.log(err));
    
    const removeEmployee = (id) => {
        deleteEmployee(id)
        .then(res => getAllEmployeeList())
        .catch(err => console.log(err));
        navigator('/employees');
    }

    const toEmployeeForm = (e) => navigator('/employee-form');   
    
  return (
    <div>
        <div className="row">
            <div className="col">
                <button onClick={toEmployeeForm} className='btn btn-success my-3'>New Employee</button>
                <div className="card">
                    <div className="card-header">
                        <h3>Employees Table</h3>
                    </div>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map(e => (
                                    <tr key={e.id}>
                                        <td>{e.id}</td>
                                        <td>{e.firstName}</td>
                                        <td>{e.lastName}</td>
                                        <td>{e.email}</td>
                                        <td>{e.phone}</td>
                                        <td>
                                            <button
                                            onClick={ () => removeEmployee(e.id)}
                                            className='btn btn-outline-danger'
                                            >Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}
