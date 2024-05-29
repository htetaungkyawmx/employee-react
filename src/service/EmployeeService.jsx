import axios from "axios";

const EMPLOYEE_BACKENT_URL =  'http://localhost:8080/employee'

export const getAllEmployees = () => axios.get(EMPLOYEE_BACKENT_URL + '/all');