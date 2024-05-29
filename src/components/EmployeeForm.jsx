

import React, { useState } from 'react'
import { createEmployee } from '../service/EmployeeService';
import { useNavigate } from 'react-router-dom';

export const EmployeeForm = () => {
  const navigator = useNavigate();
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');

  const firstNameHandler = e => setFirstName(e.target.value);
  const lastNameHandler = e => setLastName(e.target.value);
  const emailHandler = e => setEmail(e.target.value);
  const phoneHandler = e => setPhone(e.target.value);

  const [errors,setErrors] = useState(
    {
      firstName:'',
      lastName:'',
      email:'',
      phone:''
    }
  );
  const validateForm = () =>{
    let valid = true;
    const errorCopy = {...errors};
    if(firstName.trim()){
      errorCopy.firstName = '';
    }
    else{
      errorCopy.firstName = 'FirstName is required!';
      valid = false;
    }
    if(lastName.trim()){
      errorCopy.lastName = '';
    }
    else{
      errorCopy.lastName = 'LastName is required!';
      valid = false;
    }
    if(email.trim()){
      errorCopy.email = '';
    }
    else{
      errorCopy.email = 'Email is required!';
      valid = false;
    }
    if(phone.trim()){
      errorCopy.phone = '';
    }
    else{
      errorCopy.phone = 'Phone is required!';
      valid = false;
    }
    setErrors(errorCopy);
    return valid;
  }

  const saveEmployee = e =>{
    e.preventDefault();
    if(validateForm()){
      const employee = {firstName,lastName,email,phone};
      createEmployee(employee)
      .then(res => console.log(res))
      .catch(err => console.log(err));
      navigator('/employees');
    }
  }

  return (
    <div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h3>Employee Form</h3>
              </div>
              <div className="card-body">
                <form>
                
                  <div className='mb-3'>
                    <label className='form-label'>FirstName</label>
                    <input type="text"
                    className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                    name='firstName'
                    value={firstName}
                    onChange={firstNameHandler} 
                    />
                    {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>LastName</label>
                    <input type="text"
                    className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                    name='lastName'
                    value={lastName}
                    onChange={lastNameHandler} 
                    />
                    {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input type="text"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    name='email'
                    value={email}
                    onChange={emailHandler} 
                    />
                    {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Phone</label>
                    <input type="text"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    name='phone'
                    value={phone}
                    onChange={phoneHandler} 
                    />
                    {errors.phone && <div className='invalid-feedback'>{errors.phone}</div>}
                  </div>
                  <button
                  className='btn btn-success w-100 rounded'
                  onClick={saveEmployee}
                  >Save Employee</button>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
