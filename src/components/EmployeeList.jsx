import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getAllEmployees } from '../service/EmployeeService';

export const EmployeeList = () => {
    const [emplyoees, setEmployees] = useState([]);
    useEffect(() => {
        getAllEmployeeList();
    }, [])
    const getAllEmployeeList = () => getAllEmployees()
        .then(res => {
            setEmployees(res.data);
            console.log(res.data)
        })
        .catch(err => console.log(err))


    return (
        <div>
            <h1>Hello Employee</h1>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">
                            <h3>Employees Table</h3>

                        </div>
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    emplyoees.map(e => (
                                        <tr key={e.id}>
                                            <td>{e.id}</td>
                                            <td>{e.firstName}</td>
                                            <td>{e.lastName}</td>
                                            <td>{e.email}</td>
                                            <td>{e.phone}</td>
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