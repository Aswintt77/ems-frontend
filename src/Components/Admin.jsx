import React, { useEffect, useState } from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import axios from 'axios'
import { Link } from 'react-router-dom';


function Admin() {

  // Api fetching - to get all employee details
  const base_url='http://localhost:8000'

  //state creation
  const[allEmployees,setAllEmployees]=useState([])// to hold all employees details
  const fetchData=async()=>{
    const result = await axios.get(`${base_url}/get-all-employees`)//details from server
    console.log(result.data.employees);// object->array of employees
    setAllEmployees(result.data.employees)

  }
  console.log(allEmployees);// array of employees

  const deleteEmp=async(id)=>{
    const result=await axios.delete(`${base_url}/delete-an-employee/${id}`)
    console.log(result);
    alert(result.data.message)
    fetchData()
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    
    <div className='container'>
  <h1 className='text-center text-primary mt-4 mb-4'>Employee Management System</h1>
  <div className="row">
    <div className="col-md-6 d-flex align-items-center">
      <p className='mt-4 p-4' style={{ textAlign: 'justify', fontSize: '18px', fontFamily: 'sans-serif', fontStyle: 'italic' }}>
        An employee management system is a tool that companies use to organize their employee data and key functions within their HR department, including recruitment & onboarding, time and attendance tracking, performance management, training & development, payroll, and benefits administration. They are a type of workforce management tool that acts as a single source of truth for your HR professionals and employees alike.
      </p>
    </div>
    <div className="col-md-6">
      <img src="https://i0.wp.com/juntrax.com/blog/wp-content/uploads/2021/01/Employee-Management-System.jpg?resize=840%2C480&ssl=1" alt="" className="img-fluid"/>
    </div>
    <Link to={'/add'}>
    <a className='btn btn-primary mt-5 mb-5 float-end' href="">Add</a>
  </Link>
  </div>
 
  <div className='table-responsive'>
    <table className='table table-bordered table-striped table-hover'>
      <thead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Designation</th>
          <th scope='col'>Salary</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {allEmployees.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.designation}</td>
            <td>{item.salary}</td>
            <td>
              <div className='d-flex justify-content-evenly'>
                <Link to={`view/${item.id}`} className='text-primary'>
                  <i className="fas fa-eye"></i>
                </Link>
                <Link to={`edit/${item.id}`} className='text-primary'>
                  <i className='fas fa-pen'></i>
                </Link>
                <i onClick={() => deleteEmp(item.id)} className='fas fa-trash text-danger'></i>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  )
}

export default Admin