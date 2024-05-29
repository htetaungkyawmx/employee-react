import axios from "axios";


const EMPLOYEE_BACKEND_URL = 'http://localhost:8080/employee';

export const getAllEmployees = () => axios
    .get(EMPLOYEE_BACKEND_URL+'/all');

export const createEmployee = (employee) => axios.post(EMPLOYEE_BACKEND_URL
    +'/all',employee);

export const deleteEmployee = (id) => axios.delete(EMPLOYEE_BACKEND_URL
    +'/'+id);