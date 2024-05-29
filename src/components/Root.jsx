
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Root = () => {
  return (
    <div>
       <nav className='navbar navbar-expand-md navbar-dark 
       bg-success text-white'>
        <div className="container-fluid">
            <a href="#" className='navbar-brand'>Employee</a>
            <button type='button' className='navbar-toggler'
            data-bs-toggle='collapse' data-bs-target='#myNav'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div id='myNav' className='collapse navbar-collapse'>
                <ul className='navbar-nav ms-auto'>
                    <li className='nav-item'>
                        <Link to={'/employees'} className='nav-link'>Employees</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/employee-form'} className='nav-link'>New Employee</Link>
                    </li>
                    <li className='nav-item'>
                        <a href="#" className='nav-link'>About</a>
                    </li>
                </ul>
            </div>
        </div>

       </nav>

       <div className='container mt-5'>
         <Outlet />
       </div>
    </div>
  )
}
